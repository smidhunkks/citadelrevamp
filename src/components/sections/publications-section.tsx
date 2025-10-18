"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const publications = [
  {
    id: 1,
    title: "The Digital Revolution",
    author: "by Dr. Sarah Mitchell",
    category: "Technology",
    price: 24.99,
    rating: 4.8,
    reviews: 124,
    imageId: "publication-digital-revolution",
  },
  {
    id: 2,
    title: "Quantum Dreams",
    author: "by Marcus Chen",
    category: "Fiction",
    price: 19.99,
    rating: 4.9,
    reviews: 89,
    imageId: "publication-quantum-dreams",
  },
  {
    id: 3,
    title: "Leadership Mindset",
    author: "by Dr. Elena Rodriguez",
    category: "Business",
    price: 29.99,
    rating: 4.7,
    reviews: 156,
    imageId: "publication-leadership-mindset",
  },
  {
    id: 4,
    title: "Echoes of the Void",
    author: "by Amelia Thorne",
    category: "Fiction",
    price: 22.5,
    rating: 4.6,
    reviews: 112,
    imageId: "publication-fiction-1",
  },
  {
    id: 5,
    title: "The Secret Garden of Codes",
    author: "by Leo Vance",
    category: "Fiction",
    price: 18.0,
    rating: 4.8,
    reviews: 95,
    imageId: "publication-fiction-2",
  },
];

const categories = ["All Books", "Fiction", "Business", "Technology"];

const getCategoryCount = (category: string) => {
  if (category === "All Books") return publications.length;
  return publications.filter((p) => p.category === category).length;
};

export function PublicationsSection() {
  const [activeCategory, setActiveCategory] = useState("All Books");

  const filteredPublications =
    activeCategory === "All Books"
      ? publications
      : publications.filter((p) => p.category === activeCategory);

  return (
    <section id="publications" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Publications
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground lg:text-lg">
            Discover our latest published works across various genres and
            topics. Each book represents our commitment to quality and
            excellence.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category} ({getCategoryCount(category)})
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPublications.map((pub) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === pub.imageId
            );
            return (
              <Card
                key={pub.id}
                className="overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute right-4 top-4 z-10">
                      <div className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                        ${pub.price.toFixed(2)}
                      </div>
                    </div>
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={pub.title}
                        width={600}
                        height={800}
                        className="aspect-[3/4] w-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{pub.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {pub.author}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{pub.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({pub.reviews})
                        </span>
                      </div>
                      <a href="#" className="text-primary hover:underline">
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
