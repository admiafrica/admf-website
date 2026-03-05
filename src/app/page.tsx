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
  { value: "20,000+", label: "Students Trained" },
  { value: "86%", label: "Graduate Employment Rate" },
  { value: "40", label: "Countries" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero + Stats fill the viewport */}
      <div className="min-h-screen flex flex-col">
        <HeroSection
          title="Empowering Africa's next generation of creative talent."
          subtitle="Through scholarships, mentorship, and equipment grants, we support storytellers, filmmakers, musicians, and game developers building SDG-aligned solutions."
          primaryCta={{ label: "Get Involved", href: "#partner" }}
          secondaryCta={{ label: "See Our Impact", href: "#impact" }}
          heroImage="/images/students/students-photography-session.jpg"
          showBadge
        />

        {/* Impact at a Glance */}
        <section id="impact">
          <StatsBar stats={stats} />
        </section>
      </div>

      {/* Our Programs */}
      <ProgramsGrid />

      {/* Success Stories */}
      <SuccessStories />

      {/* Partners (social proof before the ask) */}
      <PartnerLogos />

      {/* CTA (while trust is high) */}
      <PartnerWithUs />

      {/* Our Team */}
      <TeamSection />

      {/* Impact Reports (resources for the already-convinced) */}
      <ImpactReports />
    </>
  );
}
