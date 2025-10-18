import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    text: "123 Clarity Avenue, Suite 100, Innovation City, 12345",
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    text: "(123) 456-7890",
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    text: "hello@claritysite.com",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">{detail.icon}</div>
                  <p className="text-muted-foreground">{detail.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
