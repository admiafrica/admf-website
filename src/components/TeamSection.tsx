import Image from "next/image";

const team = [
  {
    name: "Sila",
    role: "Community Leader",
    imageUrl: "/images/team/member-3.png",
    linkedin: "#",
  },
  {
    name: "Gemma",
    role: "Head of Partnerships",
    imageUrl: "/images/team/member-4.png",
    linkedin: "#",
  },
  {
    name: "Julie",
    role: "Title/Role",
    imageUrl: "/images/partners/member-1.png",
    linkedin: "#",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-warm section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-label section-label-light">
            Leadership
          </span>
          <h2 className="section-heading section-heading-light">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-xl overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-muted text-sm mb-2">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm hover:underline inline-flex items-center gap-1"
              >
                LinkedIn
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
