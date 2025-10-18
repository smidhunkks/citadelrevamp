import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";

const teamMembers = [
  {
    name: "Alexandra Thompson",
    role: "Editor-in-Chief",
    experience: "20+ years",
    bio: "With over 20 years in publishing, Alexandra leads our editorial vision and ensures every publication meets our highest standards.",
    imageId: "team-alexandra-thompson",
    skills: [],
    socials: [],
  },
  {
    name: "David Kim",
    role: "Senior Editor",
    experience: "15+ years",
    bio: "David specializes in fiction and literary works, bringing a keen eye for narrative structure and character development.",
    imageId: "team-david-kim",
    skills: ["Fiction Editing", "Manuscript Review", "Author Mentoring"],
    socials: [
      {
        name: "LinkedIn",
        icon: <Linkedin className="h-5 w-5" />,
        url: "#",
      },
      {
        name: "Mail",
        icon: <Mail className="h-5 w-5" />,
        url: "#",
      },
      {
        name: "Twitter",
        icon: <Twitter className="h-5 w-5" />,
        url: "#",
      },
    ],
  },
  {
    name: "Maria Santos",
    role: "Creative Director",
    experience: "12+ years",
    bio: "Maria oversees all visual aspects of our publications, from cover design to interior layout, ensuring stunning visual appeal.",
    imageId: "team-maria-santos",
    skills: [],
    socials: [],
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-secondary py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Behind every great publication is a dedicated team of professionals.
          Meet the experts who make Citadel Publication a leader in the
          industry.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === member.imageId
            );
            return (
              <Card
                key={member.name}
                className="overflow-hidden text-left transition-shadow duration-300 hover:shadow-xl"
              >
                <CardContent className="p-0">
                  <div className="group relative">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={member.name}
                        width={600}
                        height={400}
                        className="aspect-[4/3] w-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute right-4 top-4">
                      <Badge>{member.experience}</Badge>
                    </div>
                    {member.skills.length > 0 && (
                      <div className="absolute bottom-2 left-2 flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-black/40 text-white backdrop-blur-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="mt-1 text-primary">{member.role}</p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                    {member.socials.length > 0 && (
                      <div className="mt-4 flex gap-2">
                        {member.socials.map((social) => (
                          <Button
                            key={social.name}
                            size="icon"
                            variant="ghost"
                            className="text-muted-foreground hover:text-primary"
                            asChild
                          >
                            <a href={social.url}>{social.icon}</a>
                          </Button>
                        ))}
                      </div>
                    )}
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