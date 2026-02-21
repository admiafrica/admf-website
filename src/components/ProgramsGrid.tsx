const programs = [
  {
    title: "Google Ganjisha",
    description:
      "A nationwide initiative that trained 7,800+ youth across 47 Kenyan counties in content creation and digital entrepreneurship.",
  },
  {
    title: "MCF Sanara",
    description:
      "High-level animation skilling targeting women, refugees, and PWDs to place 700+ in work opportunities.",
  },
  {
    title: "AI Academy",
    description:
      'The "AI or Die" tour and corporate training hub, training 681+ individuals in January alone.',
  },
  {
    title: "CFYE (Kilifi)",
    description:
      "An audiovisual accelerator that exceeded targets by training 110 youth in creative technology.",
  },
  {
    title: "GOYN",
    description:
      "Mombasa-based skilling in film and animation for opportunity youth.",
  },
  {
    title: "Incubators",
    description:
      "Bringing early-stage creative projects to international markets.",
  },
  {
    title: "Creative Media Accelerator",
    description:
      "A specialized program for mid-career creatives to monetize their work.",
  },
  {
    title: "FilmAid Refugee Camps",
    description:
      "Essential filmmaking certification and production training in Kakuma and Dadaab camps.",
  },
  {
    title: "Dandora Hip Hop City",
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-light p-6 md:p-8 flex flex-col"
            >
              <h3 className="text-lg font-bold text-foreground mb-3 text-center">
                {program.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed text-center">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
