import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { AuthorsSection } from "@/components/sections/authors-section";
import { TeamSection } from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PublicationsSection />
        <AuthorsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}