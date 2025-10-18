import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-us-image");

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About ClaritySite
            </h2>
            <p className="text-muted-foreground lg:text-lg">
              Founded on the principles of transparency and efficiency,
              ClaritySite has been at the forefront of digital innovation. We
              believe in building strong partnerships with our clients by
              providing clear, concise, and effective solutions that drive
              growth and success.
            </p>
            <p className="text-muted-foreground lg:text-lg">
              Our team of experts is dedicated to understanding your unique
              needs and crafting tailored strategies that align with your business
              goals. From initial concept to final implementation, we are with
              you every step of the way.
            </p>
          </div>
          {aboutImage && (
            <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg shadow-lg">
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
        </div>
      </div>
    </section>
  );
}
