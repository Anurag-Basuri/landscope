"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { submitContact, type ContactActionState } from "./actions";

const initialState: ContactActionState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-linear-to-r from-cyan-primary to-teal-accent text-white"
    >
      <Send className="h-4 w-4 mr-2" />
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="firstName"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          >
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            className="bg-secondary border-border/50"
            placeholder="John"
            required
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="lastName"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          >
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            className="bg-secondary border-border/50"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          className="bg-secondary border-border/50"
          placeholder="john@example.com"
          autoComplete="email"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          className="bg-secondary border-border/50 min-h-[120px]"
          placeholder="Your message..."
          required
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status !== "idle" && state.message && (
        <p
          className={
            state.status === "success"
              ? "text-xs text-emerald-400"
              : "text-xs text-red-400"
          }
          role="status"
        >
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
