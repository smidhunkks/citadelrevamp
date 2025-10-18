import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, Book, Users, Calendar } from "lucide-react";

const missionPoints = [
  "Professional editing and proofreading",
  "Custom cover design and formatting",
  "Marketing and distribution support",
  "Author guidance throughout the process",
];

const stats = [
  {
    icon: <Book className="h-8 w-8 text-primary-foreground" />,
    value: "250+",
    label: "Books Published",
  },
  {
    icon: <Users className="h-8 w-8 text-primary-foreground" />,
    value: "150+",
    label: "Authors Supported",
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary-foreground" />,
    value: "15",
    label: "Years Experience",
  },
];

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === "about-us-image"
  );

  return (
    <section
      id="about"
      className="bg-background text-foreground py-16 sm:py-24"
    >
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Citadel Publication
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground lg:text-lg">
            For over a decade, we've been dedicated to transforming exceptional
            manuscripts into published works that inspire, educate, and
            entertain readers worldwide.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 container">
        {aboutImage && (
          <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg shadow-lg pl-4">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={aboutImage.imageHint}
            />
          </div>
        )}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="text-muted-foreground">
            We believe every story deserves to be told and every author
            deserves professional support. Our comprehensive publishing
            services ensure your work reaches its full potential and finds
            its audience.
          </p>
          <ul className="space-y-3">
            {missionPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-8 shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                {stat.icon}
              </div>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
