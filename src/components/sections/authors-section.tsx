"use client";

import Image from "next/image";
import {
  BookOpen,
  Award,
  ChevronDown,
  Linkedin,
  Twitter,
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const authors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Technology & Innovation",
    bio: "Leading expert in digital transformation with over 15 years of experience in tech innovation.",
    books: 3,
    awards: 2,
    imageId: "author-sarah-mitchell",
    socials: [],
  },
  {
    name: "Marcus Chen",
    specialty: "Science Fiction",
    bio: "Award-winning science fiction author known for thought-provoking narratives about the future.",
    books: 5,
    awards: 2,
    imageId: "author-marcus-chen",
    socials: [],
  },
  {
    name: "Dr. Elena Rodriguez",
    specialty: "Business Leadership",
    bio: "Executive coach and leadership consultant helping organizations build mindful leadership practices.",
    books: 2,
    awards: 2,
    imageId: "author-elena-rodriguez",
    socials: [],
  },
  {
    name: "James Patterson Jr.",
    specialty: "Creative Writing",
    bio: "Master storyteller and writing instructor passionate about helping others find their voice.",
    books: 4,
    awards: 2,
    imageId: "author-james-patterson",
    socials: [
      {
        name: "Twitter",
        icon: <Twitter className="h-5 w-5" />,
        url: "#",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin className="h-5 w-5" />,
        url: "#",
      },
    ],
  },
];

export function AuthorsSection() {
  return (
    <section id="authors" className="bg-secondary py-16 sm:py-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Featured Authors
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground lg:text-lg">
            Meet the talented writers and experts who trust Citadel Publication
            to bring their stories and knowledge to the world.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((author) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === author.imageId
            );
            return (
              <Card
                key={author.name}
                className="overflow-visible bg-transparent shadow-none border-0 text-center"
              >
                <CardContent className="flex flex-col items-center p-0">
                  <div className="relative mb-4 h-40 w-40 group">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={author.name}
                        width={160}
                        height={160}
                        className="rounded-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    {author.socials.length > 0 && (
                      <div className="absolute inset-0 flex items-center justify-center gap-3 rounded-full bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {author.socials.map((social) => (
                          <Button
                            key={social.name}
                            size="icon"
                            variant="outline"
                            className="rounded-full bg-white text-primary hover:bg-primary hover:text-white"
                            asChild
                          >
                            <a href={social.url}>{social.icon}</a>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{author.name}</h3>
                  <p className="mt-1 text-primary">{author.specialty}</p>
                  <p className="mt-4 text-sm text-muted-foreground h-24">
                    {author.bio}
                  </p>
                  <div className="mt-4 flex w-full justify-center gap-6 border-t border-b py-3">
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4" />
                      <span>{author.books} Books</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4" />
                      <span>{author.awards} Awards</span>
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
