import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-primary-foreground" />,
    title: "Email",
    text: "info@citadelpublication.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-primary-foreground" />,
    title: "Phone",
    text: "+1 (555) 123-4567",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary-foreground" />,
    title: "Business Hours",
    text: "Monday - Friday: 9:00 AM - 6:00 PM",
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
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground lg:text-lg">
            Ready to start your publishing journey? We'd love to hear from you.
            Contact us today to discuss your project.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{detail.title}</h4>
                    <p className="text-muted-foreground">{detail.text}</p>
                  </div>
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