"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        type="email"
        placeholder="Your email"
        className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
      />
      <Button className="bg-gradient-to-r from-cyan-primary to-teal-accent text-white shrink-0">
        <Mail className="h-4 w-4" />
      </Button>
    </form>
  );
}
