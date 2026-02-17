import type { Metadata } from "next";
import Image from 'next/image';
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ADMI Foundation's mission to empower Africa's creative talent through scholarships, mentorship, and equipment grants.",
};

const stats = [
  { value: "2018", label: "Year Founded" },
  { value: "500+", label: "Scholarships Awarded" },
  { value: "14", label: "Countries Reached" },
  { value: "6", label: "Programme Tracks" },
];

const leadership = [
  {
    name: "Dr. Margaret Wanjiku",
    role: "Executive Director",
    bio: "Former UNESCO creative economy adviser with 15 years of experience in African education policy and cultural development.",
    imageUrl: "/images/team/member-1.png",
  },
  {
    name: "James Karanja",
    role: "Director of Programmes",
    bio: "ADMI co-founder and creative industries veteran who has mentored over 200 emerging African creatives.",
    imageUrl: "/images/team/member-2.png",
  },
  {
    name: "Fatima Hassan",
    role: "Head of Partnerships",
    bio: "Previously at Mastercard Foundation, Fatima brings deep expertise in philanthropic strategy and donor relations across East Africa.",
    imageUrl: "/images/team/member-3.png",
  },
  {
    name: "David Omondi",
    role: "Head of Student Success",
    bio: "An ADMI alumnus himself, David ensures every scholarship recipient gets the support they need to thrive.",
    imageUrl: "/images/team/member-4.png",
  },
];

const milestones = [
  { year: "2018", event: "ADMI Foundation established as a programme of the Africa Digital Media Institute" },
  { year: "2019", event: "First cohort of 25 full scholarship recipients begin their studies" },
  { year: "2020", event: "Equipment grant programme launched to support remote learning during COVID-19" },
  { year: "2021", event: "Mentorship programme partnered with 50+ industry professionals" },
  { year: "2022", event: "Expanded to support students from 10 African countries" },
  { year: "2023", event: "500th scholarship awarded; first alumni reunion held in Nairobi" },
  { year: "2024", event: "Corporate partnerships with Safaricom Foundation and Google.org" },
  { year: "2025", event: "Reached 14 countries; launched equipment grants for animation studios" },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        label="About Us"
        title="Empowering Africa's Creative Voices"
        subtitle="ADMI Foundation is the philanthropic arm of the Africa Digital Media Institute, dedicated to removing financial barriers for talented young creatives across the continent."
        primaryCta={{ label: "Our Programmes", href: "/programmes" }}
        secondaryCta={{ label: "Get Involved", href: "/get-involved" }}
        backgroundImage="/images/heroes/hero-about.png"
      />

      <StatsBar stats={stats} />

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <span className="section-label section-label-light">Our Mission</span>
              <h2 className="section-heading section-heading-light mb-6">
                Why We Exist
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Africa is home to the youngest population on Earth, with an
                extraordinary wealth of untold stories, unheard music, and unseen
                art. Yet for most aspiring creatives, the cost of professional
                training remains out of reach.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                ADMI Foundation exists to bridge that gap. We believe that talent
                is universal, but opportunity is not &mdash; and that by investing
                in Africa&apos;s creative talent today, we can shape a thriving,
                globally competitive creative economy for generations to come.
              </p>
              <p className="text-muted leading-relaxed">
                Through scholarships, mentorship, and equipment grants, we ensure
                that no talented young African is held back by their financial
                circumstances.
              </p>
            </div>
            <div>
              <span className="section-label section-label-light">Our Vision</span>
              <h2 className="section-heading section-heading-light mb-6">
                What We&apos;re Building
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We envision a continent where every talented young creative has
                access to world-class training, industry mentorship, and the tools
                they need to succeed &mdash; regardless of their socioeconomic
                background.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Our goal is to build a self-sustaining ecosystem where Foundation
                alumni become the next generation of mentors, employers, and
                donors &mdash; creating a virtuous cycle of opportunity.
              </p>
              <div className="bg-warm rounded-lg p-6 mt-6">
                <h4 className="font-bold text-foreground mb-2">
                  Connection to ADMI
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  ADMI Foundation is a programme of the{" "}
                  <a
                    href="https://admi.africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Africa Digital Media Institute (ADMI)
                  </a>
                  , East Africa&apos;s leading creative arts institution offering
                  accredited programmes in film, animation, music production, and
                  game development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-warm section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-label section-label-light">Leadership</span>
            <h2 className="section-heading section-heading-light mb-4">
              Our Team
            </h2>
            <p className="section-subheading section-subheading-light max-w-2xl mx-auto">
              A dedicated team of educators, creative industry professionals, and
              development experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="card-light p-6 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    width={80}
                    height={80}
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-bold text-foreground mb-1">{person.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {person.role}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-label section-label-light">Our Journey</span>
            <h2 className="section-heading section-heading-light">Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-divider-light mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-foreground leading-relaxed pt-3">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        label="Join Us"
        title="Be Part of the Story"
        subtitle="Help us reach more talented young creatives across Africa. Every contribution makes a difference."
        primaryCta={{ label: "Donate Now", href: "/get-involved" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
