import Image from "next/image";

const team = [
  {
    name: "Carolyne Sila",
    role: "Head of School",
    imageUrl: "/images/team/carolyne-sila.jpg",
  },
  {
    name: "Gemma May-Kimani",
    role: "Partnerships Manager",
    imageUrl: "/images/team/gemma-may-kimani.png",
  },
  {
    name: "Julie Nyambeki",
    role: "Program Manager",
    imageUrl: "/images/team/julie-nyambeki.jpeg",
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
              <div className="relative w-64 h-64 md:w-48 md:h-48 mx-auto mb-4 rounded-xl overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-muted text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
