import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us — Landscope",
  description: "Get in touch with the Landscope team.",
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-5">
        <h1 className="text-4xl font-extrabold text-foreground text-center mb-4">
          Get in{" "}
          <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Have a question or want to collaborate? We&apos;d love to hear from
          you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="border-border/50">
            <CardContent className="p-6 space-y-5">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Send a Message
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    First Name
                  </label>
                  <Input
                    className="bg-secondary border-border/50"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Last Name
                  </label>
                  <Input
                    className="bg-secondary border-border/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <Input
                  type="email"
                  className="bg-secondary border-border/50"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <Textarea
                  className="bg-secondary border-border/50 min-h-[120px]"
                  placeholder="Your message..."
                />
              </div>
              <Button className="w-full bg-linear-to-r from-cyan-primary to-teal-accent text-white">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="border-border/50">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Contact Information
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-foreground text-sm mt-0.5">
                    +91 123 456 7890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-primary text-sm mt-0.5">
                    contact@landscope.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Address
                  </p>
                  <p className="text-foreground text-sm mt-0.5">
                    New Delhi, India
                  </p>
                </div>
              </div>

              <Separator className="bg-border/30" />

              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5363407753!2d76.76357639!3d28.644287199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-xl"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
