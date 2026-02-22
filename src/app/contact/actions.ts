"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { prisma } from "@/lib/db";

const ContactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  message: z.string().trim().min(10, "Message is too short").max(2000),
  company: z.string().optional(),
});

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const raw = {
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    company: String(formData.get("company") ?? ""),
  };

  if (raw.company) {
    return { status: "error", message: "Submission blocked." };
  }

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Invalid input.",
    };
  }

  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0]?.trim() : null;
  const userAgent = headerList.get("user-agent");

  try {
    await prisma.contactSubmission.create({
      data: {
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email: parsed.data.email,
        message: parsed.data.message,
        ip,
        userAgent,
      },
    });

    return { status: "success", message: "Thanks! We will get back to you." };
  } catch (error) {
    console.error("Contact submission failed", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
}
