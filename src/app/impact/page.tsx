import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Impact Reports",
  description:
    "Download ADMI Foundation impact reports, evaluations, and research documenting our work across 40 countries.",
};

const reports = [
  {
    title: "2025 Impact Report",
    description: "Our latest annual review covering programmes, outcomes, and strategic direction.",
    href: "#",
    year: "2025",
  },
  {
    title: "2024 Impact Report",
    description: "Key milestones including AI Academy launch and Google Ganjisha nationwide expansion.",
    href: "#",
    year: "2024",
  },
  {
    title: "2023 Impact Report",
    description: "Growth across refugee camp programmes and MCF Sanara animation training.",
    href: "#",
    year: "2023",
  },
  {
    title: "10 Years of Impact",
    description: "A comprehensive retrospective of a decade of creative talent development across Africa.",
    href: "#",
    year: "2013–2023",
  },
];

const evaluations = [
  {
    title: "Kilifi Challenge Fund Report",
    description: "Independent evaluation of the CFYE audiovisual accelerator in Kilifi County.",
    href: "#",
  },
  {
    title: "Ganjisha Project Endline Evaluation",
    description: "Final evaluation of the Google-funded nationwide content creation training programme.",
    href: "#",
  },
];

export default function ImpactPage() {
  return (
    <>
      <HeroSection
        label="Resources"
        title="Impact Reports"
        subtitle="Independently reviewed reports documenting our methodology, outcomes, and lessons learned across 40 countries and 12+ years of work."
        primaryCta={{ label: "Get Involved", href: "/#partner" }}
      />

      {/* Annual Reports */}
      <section className="bg-white section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading section-heading-light mb-8">
              Annual Reports
            </h2>
            <div className="space-y-4">
              {reports.map((report) => (
                <a
                  key={report.title}
                  href={report.href}
                  className="card-light p-6 flex items-center gap-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-admf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-1">{report.title}</h3>
                    <p className="text-muted text-sm">{report.description}</p>
                  </div>
                  <span className="text-muted text-sm shrink-0 hidden sm:block">{report.year}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evaluations */}
      <section className="bg-warm section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading section-heading-light mb-8">
              Programme Evaluations
            </h2>
            <div className="space-y-4">
              {evaluations.map((report) => (
                <a
                  key={report.title}
                  href={report.href}
                  className="card-light p-6 flex items-center gap-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-admf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-1">{report.title}</h3>
                    <p className="text-muted text-sm">{report.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        label="Make an Impact"
        title="Your Support Changes Lives"
        subtitle="Every donation directly funds scholarships, mentorship, and equipment grants for aspiring African creatives."
        primaryCta={{ label: "Get Involved", href: "/#partner" }}
      />
    </>
  );
}
