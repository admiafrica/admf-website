const reports = [
  { label: "Download 2025 Impact Report", href: "#" },
  { label: "Download 2024 Impact Report", href: "#" },
  { label: "Download 2023 Impact Report", href: "#" },
  { label: "Download 10 Years of Impact Report", href: "#" },
];

const evaluations = [
  { label: "Download Kilifi Challenge Fund Report", href: "#" },
  { label: "Download Ganjisha Project Endline Evaluation Report", href: "#" },
];

const lessons = [
  {
    title: "The Gear Gap",
    text: "Equipment access is the #1 barrier for youth; 1:1 student-to-computer ratios are vital for success.",
  },
  {
    title: "The Gig Barrier",
    text: 'While passion is high, many youth earn only KES 5,000\u201310,000 initially; mentorship and market linkages are the "missing middle".',
  },
  {
    title: 'The "Soft Skill" Revenue Multiplier',
    text: "While technical skills (video/graphic design) get youth in the door, soft skills (pricing, branding, and client management) are what actually increase their income.",
  },
  {
    title: 'The "Mobile-First" Reality in Rural Counties',
    text: 'In ASAL counties like Garissa and Wajir, traditional desktop-based training faces massive hurdles due to power and hardware scarcity so scaling requires "Mobile-First" curriculum design, allowing youth to shoot, edit, and monetize content entirely via smartphone.',
  },
  {
    title: "Gender-Specific Barriers to Completion",
    text: "Enrollment was nearly 50/50, however, women faced higher attrition rates due to domestic responsibilities and safety concerns regarding late-night studio sessions meaning provision of hybrid (online/offline) options and safe transport stipends are essential to hitting 70% female participation targets in projects.",
  },
  {
    title: "Government as a Scale Lever",
    text: "Positioning the ICT Authority and Cabinet Secretary as partners is a strategic move to unlock faster MOUs and national infrastructure.",
  },
];

export function ImpactReports() {
  return (
    <section id="reports" className="bg-white section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-label section-label-light">
            Resources
          </span>
          <h2 className="section-heading section-heading-light">
            Impact Reports &amp; Lessons Learned
          </h2>
        </div>

        {/* Reports grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {reports.map((r) => (
            <a
              key={r.label}
              href={r.href}
              className="group card-light p-5 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-admf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <span className="text-sm font-medium text-foreground">{r.label.replace("Download ", "")}</span>
            </a>
          ))}
        </div>

        {/* Evaluation reports */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {evaluations.map((r) => (
            <a
              key={r.label}
              href={r.href}
              className="group card-light p-5 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-admf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <span className="text-sm font-medium text-foreground">{r.label.replace("Download ", "")}</span>
            </a>
          ))}
        </div>

        {/* Lessons Learned highlight box */}
        <div className="bg-admf-green rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Headline Lessons Learned
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((lesson, i) => (
              <div
                key={lesson.title}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="text-primary/40 text-3xl font-bold leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-primary font-bold mb-2">{lesson.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {lesson.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
