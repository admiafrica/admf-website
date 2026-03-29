"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useCallback, useEffect } from "react";

const stories = [
  {
    tag: "The Global Freelancer",
    headline: "From Nairobi to the World",
    summary:
      "An ADMI graduate now works internationally, proving that our training meets global standards. Greater exposure to international markets could transform outcomes for more graduates.",
    videoId: "8EihNAexvl8",
  },
  {
    tag: "The Refugee Creator",
    headline: "From the Camp to the Camera",
    summary:
      "A graduate transitioned from a 7-week film course to producing professional content. 71% of alumni find work through ADMI's network.",
    videoId: "LHZLD6np13s",
  },
  {
    tag: "Women in Tech",
    headline: "Breaking the Screen",
    summary:
      "A woman who had never used a professional camera now earns a living in the digital economy. Ganjisha has reached 3,934 women across Kenya.",
    videoId: "ERxV0D7ml1A",
  },
];

export function SuccessStories() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const close = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    if (!activeVideo) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeVideo, close]);

  return (
    <>
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
              <button
                key={story.tag}
                onClick={() => setActiveVideo(story.videoId)}
                className="card-light overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group text-left cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${story.videoId}/hqdefault.jpg`}
                    alt={story.tag}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-colors duration-200">
                    <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors duration-200 shadow-lg">
                      <svg className="w-6 h-6 text-admf-green ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl mx-4"
            style={{ aspectRatio: "16 / 9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm flex items-center gap-1 cursor-pointer"
            >
              Close
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
