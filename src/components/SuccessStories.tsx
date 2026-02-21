import Image from "next/image";

const stories = [
  {
    tag: "The Global Freelancer",
    headline: "From Nairobi to the World",
    quote:
      "A graduate working internationally, proving that ADMI's training meets global standards and that greater exposure to international markets could transform outcomes for more graduates.",
    imageUrl: "/images/students/student-1.png",
  },
  {
    tag: "The Refugee Creator",
    headline:
      "From the camp to the camera",
    quote:
      "How a graduate transitioned from a 7-week film course to producing professional content. 71% of alumni find work through ADMI's network.",
    imageUrl: "/images/students/student-2.png",
  },
  {
    tag: "Women in Tech",
    headline:
      "Breaking the Screen",
    quote:
      "How a woman who had never used a professional camera now earns a living in the digital economy. Ganjisha reached 3,934 women.",
    imageUrl: "/images/students/student-3.png",
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
              className="card-light overflow-hidden flex flex-col"
            >
              <div className="relative h-52">
                <Image
                  src={story.imageUrl}
                  alt={story.tag}
                  fill
                  className="object-cover"
                  unoptimized
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
                  {story.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
