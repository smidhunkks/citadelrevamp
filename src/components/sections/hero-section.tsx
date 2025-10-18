import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Book, Edit } from "lucide-react";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section id="home" className="relative h-[calc(100dvh-3.5rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Creating <span className="text-primary">Literary</span> Excellence
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 md:text-xl">
            Citadel Publication empowers authors and readers through exceptional
            publishing services. We transform manuscripts into masterpieces and
            connect stories with the world.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="#publications">
                <Book className="mr-2 h-5 w-5" />
                Explore Publications
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                <Edit className="mr-2 h-5 w-5" />
                Submit Your Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}