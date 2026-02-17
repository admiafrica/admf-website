import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Explore ADMI Foundation programmes including scholarships, industry mentorship, and equipment grants for aspiring African creatives.",
};

const scholarshipTiers = [
  {
    name: "Full Scholarship",
    description: "Covers 100% of tuition, materials, and a monthly stipend for living expenses.",
    eligibility: "Outstanding talent + demonstrated financial need",
    slots: "10 per intake",
  },
  {
    name: "Partial Scholarship (75%)",
    description: "Covers 75% of tuition fees. Students contribute the remaining 25%.",
    eligibility: "Strong portfolio + financial need",
    slots: "25 per intake",
  },
  {
    name: "Partial Scholarship (50%)",
    description: "Covers 50% of tuition fees with flexible payment plans for the balance.",
    eligibility: "Promising talent + financial need",
    slots: "40 per intake",
  },
];

const mentorshipBenefits = [
  {
    icon: "\uD83C\uDFAF",
    title: "1-on-1 Industry Mentoring",
    description: "Matched with a professional in your chosen creative field for monthly sessions over 12 months.",
  },
  {
    icon: "\uD83D\uDCBC",
    title: "Portfolio Reviews",
    description: "Quarterly portfolio reviews from industry panels to keep your work on track for employment.",
  },
  {
    icon: "\uD83C\uDF10",
    title: "Networking Events",
    description: "Access to exclusive industry meetups, studio visits, and creative showcases in Nairobi and beyond.",
  },
  {
    icon: "\uD83D\uDE80",
    title: "Career Placement Support",
    description: "CV workshops, interview preparation, and introductions to hiring creative studios and agencies.",
  },
];

const equipmentCategories = [
  {
    category: "Film & Video Production",
    items: "Cameras, lighting kits, audio recorders, editing workstations",
  },
  {
    category: "Music Production",
    items: "DAW software licences, MIDI controllers, studio monitors, microphones",
  },
  {
    category: "Animation & VFX",
    items: "Graphics tablets, 3D software licences, rendering credits, high-spec workstations",
  },
  {
    category: "Game Development",
    items: "Game engine licences, development kits, testing devices, cloud hosting credits",
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <HeroSection
        label="Our Programmes"
        title="Three Pathways to a Creative Career"
        subtitle="Whether you need funding, guidance, or tools, ADMI Foundation has a programme to support your journey into the creative industries."
        primaryCta={{ label: "Apply Now", href: "/contact" }}
        secondaryCta={{ label: "Check Eligibility", href: "#scholarships" }}
        backgroundImage="/images/heroes/hero-programmes.png"
      />

      {/* Scholarships */}
      <section id="scholarships" className="bg-white section-padding">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <span className="section-label section-label-light">Scholarships</span>
            <h2 className="section-heading section-heading-light mb-4">
              Scholarships for Aspiring Creatives
            </h2>
            <p className="section-subheading section-subheading-light">
              Our scholarship programme removes the financial barrier to
              world-class creative education. Intakes open in{" "}
              <strong>January, May, and September</strong> each year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarshipTiers.map((tier) => (
              <div key={tier.name} className="card-light p-6 md:p-8">
                <span className="badge badge-teal mb-4">{tier.name}</span>
                <p className="text-foreground leading-relaxed mb-4">
                  {tier.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">&#10003;</span>
                    <span className="text-muted">{tier.eligibility}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">&#10003;</span>
                    <span className="text-muted">{tier.slots}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-warm rounded-lg p-6">
            <h4 className="font-bold text-foreground mb-2">Application Timeline</h4>
            <p className="text-muted text-sm leading-relaxed">
              Applications open <strong>3 months before each intake</strong>.
              The next intakes are <strong>May 2026</strong> and{" "}
              <strong>September 2026</strong>. Submit your portfolio, academic
              records, and a personal statement describing your creative
              ambitions and financial circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section id="mentorship" className="bg-warm section-padding">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <span className="section-label section-label-light">Mentorship</span>
            <h2 className="section-heading section-heading-light mb-4">
              Industry Mentorship Programme
            </h2>
            <p className="section-subheading section-subheading-light">
              Pairing students with experienced creative professionals for
              12 months of guided development, portfolio building, and career
              preparation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentorshipBenefits.map((benefit) => (
              <div key={benefit.title} className="card-light p-6 md:p-8">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grants */}
      <section id="equipment-grants" className="bg-white section-padding">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <span className="section-label section-label-light">Equipment Grants</span>
            <h2 className="section-heading section-heading-light mb-4">
              Tools to Bring Your Vision to Life
            </h2>
            <p className="section-subheading section-subheading-light">
              Professional-grade equipment and software for students who have the
              talent but lack the tools. Grants are available to all enrolled ADMI
              students, with priority given to scholarship recipients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipmentCategories.map((cat) => (
              <div key={cat.category} className="card-light p-6">
                <h3 className="font-bold text-foreground mb-2">{cat.category}</h3>
                <p className="text-muted text-sm">{cat.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students in Action */}
      <section className="bg-warm section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-label section-label-light">Success in Action</span>
            <h2 className="section-heading section-heading-light mb-4">
              Empowered with the Right Tools
            </h2>
            <p className="section-subheading section-subheading-light max-w-2xl mx-auto">
              With access to professional equipment and mentorship, our students
              are creating award-winning content and building successful careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: "/images/students/student-equipment-1.png", alt: "Student working with professional camera equipment" },
              { src: "/images/students/student-equipment-2.png", alt: "Music production student in studio" },
              { src: "/images/students/student-equipment-3.png", alt: "Animation student with graphics tablet" },
              { src: "/images/students/student-equipment-4.png", alt: "Film students collaborating on set" },
            ].map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-admf-green section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label section-label-dark">Eligibility</span>
            <h2 className="section-heading section-heading-dark mb-6">
              Who Can Apply?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "African nationals aged 17\u201330",
                "Demonstrated interest in film, animation, music, or game development",
                "Financial need (supporting documents required)",
                "Strong creative portfolio or audition piece",
                "Secondary school certificate or equivalent",
                "Commitment to completing the full programme",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/80 text-sm">
                  <span className="text-primary font-bold mt-0.5">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        label="Ready to Apply?"
        title="Take the First Step"
        subtitle="Applications are open for the May 2026 and September 2026 intakes. Start your journey into the creative industries today."
        primaryCta={{ label: "Apply Now", href: "/contact" }}
        secondaryCta={{ label: "Contact Admissions", href: "/contact" }}
      />
    </>
  );
}
