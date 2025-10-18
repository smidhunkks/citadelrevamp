import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Alexandra Thompson",
    role: "Editor-in-Chief",
    experience: "20+ years",
    bio: "With over 20 years in publishing, Alexandra leads our editorial vision and ensures every publication meets our highest standards.",
    imageId: "team-alexandra-thompson",
  },
  {
    name: "David Kim",
    role: "Senior Editor",
    experience: "15+ years",
    bio: "David specializes in fiction and literary works, bringing a keen eye for narrative structure and character development.",
    imageId: "team-david-kim",
  },
  {
    name: "Maria Santos",
    role: "Creative Director",
    experience: "12+ years",
    bio: "Maria oversees all visual aspects of our publications, from cover design to interior layout, ensuring stunning visual appeal.",
    imageId: "team-maria-santos",
  },
  {
    name: "Robert Chen",
    role: "Marketing Director",
    experience: "18+ years",
    bio: "Robert develops comprehensive marketing strategies that help our authors reach their target audiences effectively.",
    imageId: "team-robert-chen",
  },
  {
    name: "Jennifer Walsh",
    role: "Acquisitions Editor",
    experience: "10+ years",
    bio: "Jennifer identifies and evaluates promising manuscripts, working closely with authors to develop their projects.",
    imageId: "team-jennifer-walsh",
  },
  {
    name: "Michael Rodriguez",
    role: "Production Manager",
    experience: "14+ years",
    bio: "Michael ensures smooth production processes from final manuscript to printed book, maintaining quality at every step.",
    imageId: "team-michael-rodriguez",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-secondary py-16 sm:py-24">
      <div className="container px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meet Our Team
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
                className="overflow-hidden rounded-lg text-left shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <CardContent className="p-0">
                  <div className="relative">
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
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="mt-1 text-primary">{member.role}</p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {member.bio}
                    </p>
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
