import Image from "next/image";

const stories = [
  {
    tag: "The Global Freelancer",
    headline: "From Nairobi to the World",
    summary:
      "An ADMI graduate now works internationally, proving that our training meets global standards. Greater exposure to international markets could transform outcomes for more graduates.",
    imageUrl: "/images/students/student-group-1.jpg",
  },
  {
    tag: "The Refugee Creator",
    headline: "From the Camp to the Camera",
    summary:
      "A graduate transitioned from a 7-week film course to producing professional content. 71% of alumni find work through ADMI's network.",
    imageUrl: "/images/students/student-group-2.jpg",
  },
  {
    tag: "Women in Tech",
    headline: "Breaking the Screen",
    summary:
      "A woman who had never used a professional camera now earns a living in the digital economy. Ganjisha has reached 3,934 women across Kenya.",
    imageUrl: "/images/students/student-session.jpg",
  },
];

export function SuccessStories() {
  return (
    <section id="stories" className="bg-warm section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-label section-label-light">
            Success Stories
          </span>
          <h2 className="section-heading section-heading-light">
            Lives Transformed
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.tag}
              className="card-light overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={story.imageUrl}
                  alt={story.tag}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="badge badge-teal mb-3 self-start">
                  {story.tag}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {story.headline}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1">
                  {story.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
