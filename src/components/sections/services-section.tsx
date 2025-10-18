import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, Briefcase, Users } from "lucide-react";

const services = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Business Strategy",
    description:
      "We help you define and execute a clear business strategy for sustainable growth and a competitive edge in the market.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Data Analytics",
    description:
      "Unlock the power of your data with our advanced analytics solutions, turning insights into actionable business intelligence.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "User-Centric Design",
    description:
      "Our design philosophy puts your users first, creating intuitive and engaging experiences that build loyalty and drive conversions.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We offer a range of services designed to help your business thrive
            in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transform-gpu text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <CardTitle className="pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
