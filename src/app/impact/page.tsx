import type { Metadata } from "next";
import Image from 'next/image';
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See how ADMI Foundation scholarships, mentorship, and equipment grants are transforming lives and building Africa's creative economy.",
};

const impactStats = [
  { value: "500+", label: "Scholarships Awarded" },
  { value: "85%", label: "Employed Within 6 Months" },
  { value: "40+", label: "Student Businesses Founded" },
  { value: "$2.1M", label: "Total Funding Disbursed" },
];

const stories = [
  {
    name: "Grace Akinyi",
    location: "Nairobi, Kenya",
    programme: "Full Scholarship \u2013 Film Production",
    year: "2022\u20132024",
    imageUrl: "/images/students/student-1.png",
    before:
      "Grace grew up in Kibera, Nairobi\u2019s largest informal settlement. She taught herself filmmaking by watching tutorials on a borrowed phone and shot her first short film on a KSh 500 budget.",
    after:
      "After graduating with a diploma in Film Production, Grace\u2019s graduation film was selected for an international short film festival. She now works as an assistant director at a Nairobi production house and mentors younger students from her community.",
    quote:
      "The Foundation didn\u2019t just pay for my education \u2013 it showed me that someone believed in my story before I even knew how to tell it.",
  },
  {
    name: "Samuel Ochieng",
    location: "Kisumu, Kenya",
    programme: "Equipment Grant \u2013 Music Production",
    year: "2023\u20132025",
    imageUrl: "/images/students/student-2.png",
    before:
      "Samuel had been producing beats on a cracked version of FL Studio on a shared family computer. He had undeniable talent but no access to professional tools or training.",
    after:
      "With an equipment grant covering a DAW licence, studio monitors, and a MIDI controller, Samuel produced his debut EP during his studies. He now works as a sound engineer at a commercial studio in Nairobi and produces for independent artists.",
    quote:
      "Having professional tools didn\u2019t just improve my sound \u2013 it gave me the confidence to call myself a real producer.",
  },
  {
    name: "Amara Njeri",
    location: "Mombasa, Kenya",
    programme: "Mentorship Programme \u2013 Animation",
    year: "2021\u20132023",
    imageUrl: "/images/students/student-3.png",
    before:
      "Amara was a self-taught animator creating short clips on her laptop. She had strong technical skills but no understanding of the business side of the industry or how to find clients.",
    after:
      "Through the mentorship programme, Amara was paired with a senior animator at a Nairobi VFX studio. With guidance on portfolio building, pricing, and client management, she launched her own animation micro-studio with three employees.",
    quote:
      "My mentor didn\u2019t just teach me about animation \u2013 she taught me how to build a business around my art.",
  },
  {
    name: "Kofi Mensah",
    location: "Accra, Ghana",
    programme: "Partial Scholarship (75%) \u2013 Game Development",
    year: "2023\u20132025",
    imageUrl: "/images/students/student-4.png",
    before:
      "Kofi was building simple mobile games in his bedroom in Accra, inspired by stories from Ghanaian folklore. He applied to ADMI but couldn\u2019t afford the full tuition.",
    after:
      "With a 75% scholarship, Kofi completed the Game Development programme and built a mobile puzzle game based on Akan folklore that has been downloaded over 50,000 times on the Google Play Store.",
    quote:
      "Africa has millions of stories that have never been turned into games. The Foundation gave me the skills to start changing that.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <HeroSection
        label="Our Impact"
        title="Stories of Transformation"
        subtitle="Every scholarship, mentorship match, and equipment grant represents a life changed and a creative career launched. Here are some of the people behind the numbers."
        primaryCta={{ label: "Donate Now", href: "/get-involved" }}
        secondaryCta={{ label: "Our Programmes", href: "/programmes" }}
        backgroundImage="/images/heroes/hero-impact.png"
      />

      <StatsBar stats={impactStats} />

      {/* Student Stories */}
      <section className="bg-white section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-label section-label-light">Impact Stories</span>
            <h2 className="section-heading section-heading-light mb-4">
              From Aspiration to Achievement
            </h2>
            <p className="section-subheading section-subheading-light max-w-2xl mx-auto">
              These are real stories from Foundation beneficiaries whose lives
              and careers have been transformed.
            </p>
          </div>
          <div className="space-y-8">
            {stories.map((story) => (
              <div key={story.name} className="card-light overflow-hidden">
                <div className="md:flex md:gap-8">
                  <div className="md:w-64 md:flex-shrink-0">
                    <Image
                      src={story.imageUrl}
                      alt={story.name}
                      width={300}
                      height={300}
                      className="w-full h-64 md:h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-6 md:p-10 md:py-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="badge badge-teal">{story.programme}</span>
                      <span className="text-muted text-sm">{story.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {story.name}
                    </h3>
                    <p className="text-muted text-sm mb-6">{story.location}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-sm text-foreground mb-2 uppercase tracking-wide">
                          Before
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">
                          {story.before}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-primary mb-2 uppercase tracking-wide">
                          After
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">
                          {story.after}
                        </p>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-warm section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-label section-label-light">By the Numbers</span>
            <h2 className="section-heading section-heading-light mb-4">
              Measuring Our Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                metric: "92%",
                label: "Graduation Rate",
                detail: "Foundation scholars graduate at a significantly higher rate than the national average for tertiary education.",
              },
              {
                metric: "85%",
                label: "Employed Within 6 Months",
                detail: "Our graduates find employment or launch their own ventures within six months of completing their programme.",
              },
              {
                metric: "3.2x",
                label: "Return on Investment",
                detail: "For every $1 invested in a Foundation scholarship, graduates generate an estimated $3.20 in economic value within 3 years.",
              },
            ].map((item) => (
              <div key={item.label} className="card-light p-6 md:p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {item.metric}
                </div>
                <h3 className="font-bold text-foreground mb-3">{item.label}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        label="Make an Impact"
        title="Your Support Changes Lives"
        subtitle="Every donation directly funds scholarships, mentorship, and equipment grants for aspiring African creatives."
        primaryCta={{ label: "Donate Now", href: "/get-involved" }}
        secondaryCta={{ label: "Partner With Us", href: "/get-involved#partnerships" }}
      />
    </>
  );
}
