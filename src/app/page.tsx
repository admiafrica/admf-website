import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { SuccessStories } from "@/components/SuccessStories";
import { PartnerLogos } from "@/components/PartnerLogos";
import { ImpactReports } from "@/components/ImpactReports";
import { TeamSection } from "@/components/TeamSection";
import { PartnerWithUs } from "@/components/PartnerWithUs";

const stats = [
  { value: "12+", label: "Years of Impact" },
  { value: "20,000+", label: "Students Trained (4,000 certified)" },
  { value: "86%", label: "Graduate Employment Rate" },
  { value: "40", label: "Countries" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero / Intro */}
      <HeroSection
        label="ADMI Foundation"
        title="We're empowering the next generation of African storytellers, filmmakers, musicians, and game developers."
        subtitle="We provide scholarships, mentorship, and equipment grants to empower the next generation of African creators to build SDG-aligned solutions."
        primaryCta={{ label: "Donate Now", href: "#partner" }}
        heroImage="/images/heroes/hero-postproduction.png"
        showBadge
      />

      {/* Impact at a Glance */}
      <section id="impact">
        <StatsBar stats={stats} />
      </section>

      {/* Our Programs */}
      <ProgramsGrid />

      {/* Success Stories */}
      <SuccessStories />

      {/* Partners */}
      <PartnerLogos />

      {/* Impact Reports & Lessons Learned */}
      <ImpactReports />

      {/* Our Team */}
      <TeamSection />

      {/* Partner With Us */}
      <PartnerWithUs />
    </>
  );
}
