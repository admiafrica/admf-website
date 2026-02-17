import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Support ADMI Foundation through donations, corporate partnerships, volunteering, or in-kind contributions.",
};

const donationTiers = [
  {
    amount: "$50",
    impact: "Provides a student with essential software licences for one semester",
    label: "Supporter",
  },
  {
    amount: "$250",
    impact: "Funds a full equipment grant for a music production student",
    label: "Champion",
  },
  {
    amount: "$1,000",
    impact: "Sponsors a partial scholarship (50%) for one semester",
    label: "Patron",
  },
  {
    amount: "$5,000",
    impact: "Fully funds one student's scholarship for an entire academic year",
    label: "Visionary",
  },
];

const partnershipTypes = [
  {
    icon: "\uD83C\uDFE2",
    title: "Corporate Sponsorship",
    description:
      "Sponsor scholarships, name a programme track, or fund a cohort. Receive brand visibility, impact reports, and engagement opportunities with students.",
  },
  {
    icon: "\uD83C\uDF93",
    title: "Scholarship Matching",
    description:
      "Match donor contributions dollar-for-dollar to double the impact. Ideal for corporate CSR budgets or family foundations.",
  },
  {
    icon: "\uD83C\uDFAC",
    title: "Equipment Donations",
    description:
      "Donate professional-grade cameras, computers, audio equipment, or software licences. We handle logistics and ensure everything reaches students who need it.",
  },
  {
    icon: "\uD83D\uDC65",
    title: "Employee Engagement",
    description:
      "Offer your team as guest lecturers, portfolio reviewers, or career mentors. A meaningful way to invest in the next generation.",
  },
];

const volunteerRoles = [
  {
    title: "Industry Mentor",
    commitment: "2\u20134 hours per month for 12 months",
    description: "Share your expertise with a student in your creative field.",
  },
  {
    title: "Portfolio Reviewer",
    commitment: "Quarterly, 2\u20133 hours per session",
    description: "Provide feedback on student work and help them prepare for industry.",
  },
  {
    title: "Guest Speaker",
    commitment: "One-off or recurring",
    description: "Share your career journey and insights with current students.",
  },
  {
    title: "Fundraising Volunteer",
    commitment: "Flexible",
    description: "Help us organise events, run campaigns, or connect us with potential donors.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <HeroSection
        label="Get Involved"
        title="Every Contribution Counts"
        subtitle="Whether you give financially, partner with us, volunteer your time, or donate equipment, you're helping an aspiring creative reach their potential."
        primaryCta={{ label: "Donate Now", href: "#donate" }}
        secondaryCta={{ label: "Partner With Us", href: "#partnerships" }}
      />

      {/* Donate */}
      <section id="donate" className="bg-white section-padding">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <span className="section-label section-label-light">Donate</span>
            <h2 className="section-heading section-heading-light mb-4">
              Fund a Future Creative
            </h2>
            <p className="section-subheading section-subheading-light">
              100% of your donation goes directly to student support. Choose an
              amount that works for you, or set up a recurring monthly gift.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier) => (
              <div
                key={tier.label}
                className="card-light p-6 text-center hover:shadow-lg transition-shadow"
              >
                <span className="badge badge-teal mb-4">{tier.label}</span>
                <div className="text-3xl font-bold text-admf-green mb-3">
                  {tier.amount}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {tier.impact}
                </p>
                <button className="btn btn-primary w-full">
                  Give {tier.amount}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted text-sm mb-4">
              Want to give a custom amount or set up a monthly donation?
            </p>
            <Link href="/contact" className="btn btn-outline">
              Contact Us to Arrange
            </Link>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="bg-warm section-padding">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <span className="section-label section-label-light">Partnerships</span>
            <h2 className="section-heading section-heading-light mb-4">
              Corporate &amp; Institutional Partnerships
            </h2>
            <p className="section-subheading section-subheading-light">
              Partner with ADMI Foundation to invest in Africa&apos;s creative
              economy. We offer flexible partnership models tailored to your
              organisation&apos;s goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipTypes.map((type) => (
              <div key={type.title} className="card-light p-6 md:p-8">
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="btn btn-primary">
              Discuss a Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="bg-white section-padding">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <span className="section-label section-label-light">Volunteer</span>
            <h2 className="section-heading section-heading-light mb-4">
              Share Your Time &amp; Expertise
            </h2>
            <p className="section-subheading section-subheading-light">
              You don&apos;t have to give money to make a difference. Your time,
              skills, and industry experience are just as valuable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerRoles.map((role) => (
              <div key={role.title} className="card-light p-6">
                <h3 className="font-bold text-foreground mb-1">{role.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {role.commitment}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="btn btn-outline">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

      {/* In-Kind */}
      <section className="bg-admf-green section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label section-label-dark">In-Kind Donations</span>
            <h2 className="section-heading section-heading-dark mb-4">
              Donate Equipment &amp; Resources
            </h2>
            <p className="section-subheading section-subheading-dark max-w-2xl mx-auto mb-8">
              Have professional cameras, audio equipment, computers, or software
              licences your organisation no longer needs? We&apos;ll put them in
              the hands of students who need them most.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "Cameras & Lenses",
                "Audio Equipment",
                "Computers & Monitors",
                "Software Licences",
                "Musical Instruments",
                "Lighting Kits",
              ].map((item) => (
                <span key={item} className="badge badge-dark">
                  {item}
                </span>
              ))}
            </div>
            <Link href="/contact" className="btn btn-primary">
              Arrange a Donation
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        label="Thank You"
        title="Together, We're Building Africa's Creative Future"
        subtitle="Every contribution, no matter the size, helps an aspiring creative get one step closer to their dreams."
        primaryCta={{ label: "Donate Now", href: "#donate" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
