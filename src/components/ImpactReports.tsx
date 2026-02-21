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

        {/* Impact report buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {reports.map((r) => (
            <a key={r.label} href={r.href} className="btn btn-outline text-sm">
              {r.label}
            </a>
          ))}
        </div>

        {/* Evaluation report buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {evaluations.map((r) => (
            <a key={r.label} href={r.href} className="btn btn-outline text-sm">
              {r.label}
            </a>
          ))}
        </div>

        {/* Lessons Learned highlight box */}
        <div className="bg-admf-green rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Headline Lessons Learned
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <div
                key={lesson.title}
                className="bg-white/5 border border-white/10 rounded-lg p-5"
              >
                <h4 className="text-primary font-bold mb-2">{lesson.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {lesson.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
