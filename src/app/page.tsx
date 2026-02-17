import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { ProgrammeCard } from "@/components/ProgrammeCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PartnerLogos } from "@/components/PartnerLogos";
import { CTASection } from "@/components/CTASection";

const stats = [
  { value: "500+", label: "Scholarships Awarded" },
  { value: "1,200+", label: "Students Supported" },
  { value: "92%", label: "Graduation Rate" },
  { value: "14", label: "African Countries" },
];

const programmes = [
  {
    icon: "\uD83C\uDF93",
    badge: "Scholarships",
    title: "Full & Partial Scholarships",
    description:
      "Merit and need-based scholarships for aspiring creatives to study film, animation, music production, and game development at ADMI.",
    href: "/programmes#scholarships",
  },
  {
    icon: "\uD83E\uDD1D",
    badge: "Mentorship",
    title: "Industry Mentorship Programme",
    description:
      "Connecting students with seasoned professionals in the creative industries for guidance, portfolio reviews, and career support.",
    href: "/programmes#mentorship",
  },
  {
    icon: "\uD83C\uDFAC",
    badge: "Equipment Grants",
    title: "Equipment & Studio Grants",
    description:
      "Providing production equipment, software licences, and studio access to students who need resources to bring their creative vision to life.",
    href: "/programmes#equipment-grants",
  },
];

const testimonials = [
  {
    quote:
      "The ADMI Foundation scholarship changed my life. I went from watching films on my phone in Kibera to directing my own short film that screened at a festival in Berlin.",
    name: "Grace Akinyi",
    role: "Film Graduate, 2024",
    programme: "Full Scholarship Recipient",
    imageUrl: "/images/students/student-1.png",
  },
  {
    quote:
      "Without the equipment grant, I would never have been able to produce my first EP. Now I'm working as a sound engineer at a studio in Nairobi.",
    name: "Samuel Ochieng",
    role: "Music Production Graduate",
    programme: "Equipment Grant Recipient",
    imageUrl: "/images/students/student-2.png",
  },
  {
    quote:
      "My mentor from the programme helped me understand the business side of animation. I now run a small studio with three employees.",
    name: "Amara Njeri",
    role: "Animation Graduate, 2023",
    programme: "Mentorship Programme",
    imageUrl: "/images/students/student-3.png",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        label="ADMI Foundation"
        title="Investing in Africa's Creative Talent"
        subtitle="We provide scholarships, mentorship, and equipment grants to empower the next generation of African storytellers, filmmakers, musicians, and game developers."
        primaryCta={{ label: "Donate Now", href: "/get-involved" }}
        secondaryCta={{ label: "Our Impact", href: "/impact" }}
        heroImage="/images/heroes/hero-postproduction.png"
      />

      {/* Impact Numbers */}
      <StatsBar stats={stats} />

      {/* Our Programmes */}
      <section className="bg-white section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-label section-label-light">
              What We Do
            </span>
            <h2 className="section-heading section-heading-light mb-4">
              Our Programmes
            </h2>
            <p className="section-subheading section-subheading-light max-w-2xl mx-auto">
              Three pathways to support talented creatives who lack the resources
              to pursue their dreams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((programme) => (
              <ProgrammeCard key={programme.title} {...programme} />
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="bg-warm section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-label section-label-light">
              Student Stories
            </span>
            <h2 className="section-heading section-heading-light mb-4">
              Lives Transformed
            </h2>
            <p className="section-subheading section-subheading-light max-w-2xl mx-auto">
              Hear from the students whose careers were made possible by the
              generosity of our donors and partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnerLogos />

      {/* CTA */}
      <CTASection
        label="Get Involved"
        title="Help Us Shape Africa's Creative Future"
        subtitle="Whether you donate, partner with us, or volunteer your time, every contribution helps an aspiring creative get closer to their dreams."
        primaryCta={{ label: "Donate Now", href: "/get-involved" }}
        secondaryCta={{ label: "Partner With Us", href: "/get-involved#partnerships" }}
      />
    </>
  );
}
