const programs = [
  {
    title: "Google Ganjisha",
    stat: "7,800+",
    statLabel: "youth trained",
    description:
      "A nationwide initiative across 47 Kenyan counties in content creation and digital entrepreneurship.",
  },
  {
    title: "MCF Sanara",
    stat: "700+",
    statLabel: "placed in work",
    description:
      "High-level animation skilling targeting women, refugees, and PWDs.",
  },
  {
    title: "AI Academy",
    stat: "681+",
    statLabel: "trained in Jan",
    description:
      'The "AI or Die" tour and corporate training hub.',
  },
  {
    title: "CFYE (Kilifi)",
    stat: "110",
    statLabel: "youth trained",
    description:
      "An audiovisual accelerator that exceeded targets in creative technology.",
  },
  {
    title: "GOYN",
    stat: null,
    statLabel: null,
    description:
      "Mombasa-based skilling in film and animation for opportunity youth.",
  },
  {
    title: "Incubators",
    stat: null,
    statLabel: null,
    description:
      "Bringing early-stage creative projects to international markets.",
  },
  {
    title: "Creative Media Accelerator",
    stat: null,
    statLabel: null,
    description:
      "A specialized program for mid-career creatives to monetize their work.",
  },
  {
    title: "FilmAid Refugee Camps",
    stat: null,
    statLabel: null,
    description:
      "Essential filmmaking certification and production training in Kakuma and Dadaab camps.",
  },
  {
    title: "Dandora Hip Hop City",
    stat: null,
    statLabel: null,
    description:
      "Community-anchored digital literacy and creative arts engagement.",
  },
];

export function ProgramsGrid() {
  return (
    <section id="programs" className="bg-white section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-label section-label-light">What We Do</span>
          <h2 className="section-heading section-heading-light">
            Our Programs
          </h2>
          <p className="section-subheading section-subheading-light mt-4 max-w-2xl mx-auto">
            From nationwide digital skills training to refugee camp filmmaking courses, our programs reach communities where opportunity is needed most.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-light p-6 md:p-8 flex flex-col border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {program.stat && (
                <div className="mb-3">
                  <span className="text-2xl font-bold text-admf-green">{program.stat}</span>
                  <span className="text-muted text-xs ml-1">{program.statLabel}</span>
                </div>
              )}
              <h3 className="text-lg font-bold text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
