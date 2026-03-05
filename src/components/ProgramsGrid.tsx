const programs = [
  {
    title: "Google Ganjisha",
    stat: "7,800+",
    statLabel: "youth trained",
    description:
      "A nationwide initiative across 47 Kenyan counties in content creation and digital entrepreneurship.",
    icon: "🇰🇪",
  },
  {
    title: "MCF Sanara",
    stat: "700+",
    statLabel: "placed in work",
    description:
      "High-level animation skilling targeting women, refugees, and PWDs.",
    icon: "🎨",
  },
  {
    title: "AI Academy",
    stat: "681+",
    statLabel: "trained in Jan",
    description:
      'The "AI or Die" tour and corporate training hub for the future of work.',
    icon: "🤖",
  },
  {
    title: "FilmAid Refugee Camps",
    stat: "71%",
    statLabel: "alumni employed",
    description:
      "Filmmaking certification and production training in Kakuma and Dadaab camps.",
    icon: "🎬",
  },
  {
    title: "CFYE Kilifi",
    stat: "110",
    statLabel: "youth trained",
    description:
      "An audiovisual accelerator that exceeded targets in creative technology.",
    icon: "🎧",
  },
  {
    title: "Dandora Hip Hop City",
    stat: null,
    statLabel: null,
    description:
      "Community-anchored digital literacy and creative arts engagement.",
    icon: "🎤",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-light p-6 md:p-8 flex gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-3xl shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                {program.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {program.title}
                  </h3>
                  {program.stat && (
                    <span className="text-sm font-semibold text-admf-green">
                      {program.stat} <span className="text-muted font-normal text-xs">{program.statLabel}</span>
                    </span>
                  )}
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More programs teaser */}
        <div className="mt-8 text-center">
          <p className="text-muted text-sm">
            Plus: GOYN Mombasa · Incubators · Creative Media Accelerator
          </p>
        </div>
      </div>
    </section>
  );
}
