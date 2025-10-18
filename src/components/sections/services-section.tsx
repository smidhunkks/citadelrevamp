import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Edit, Palette, LayoutTemplate, Megaphone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: <Edit className="h-8 w-8 text-primary" />,
    title: "Professional Editing",
    description:
      "Comprehensive editing services including developmental, copy, and line editing to perfect your manuscript.",
    features: [
      "Developmental editing",
      "Copy editing",
      "Proofreading",
      "Style consistency",
    ],
    color: "bg-blue-100",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Cover Design",
    description:
      "Eye-catching, professional cover designs that capture your book's essence and attract readers.",
    features: [
      "Custom artwork",
      "Typography design",
      "Market research",
      "Multiple concepts",
    ],
    color: "bg-purple-100",
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
    title: "Book Formatting",
    description:
      "Professional interior layout and formatting for both print and digital publications.",
    features: [
      "Print formatting",
      "eBook conversion",
      "Typography",
      "Chapter layouts",
    ],
    color: "bg-green-100",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: "Marketing Support",
    description:
      "Strategic marketing and promotional services to help your book reach its target audience.",
    features: [
      "Marketing strategy",
      "Social media promotion",
      "Book launch support",
      "Author branding",
    ],
    color: "bg-orange-100",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Publishing Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground lg:text-lg">
            From manuscript to marketplace, we provide comprehensive publishing
            services to help authors succeed at every stage of their journey.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card
                    className="flex h-full transform-gpu flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <CardHeader className="items-start">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full ${service.color}`}
                      >
                        {service.icon}
                      </div>
                      <CardTitle className="pt-4 text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col">
                      <p className="text-muted-foreground">{service.description}</p>
                      <ul className="mt-6 flex-grow space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
