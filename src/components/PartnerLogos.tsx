import Image from "next/image";

const partners = [
  { name: "Google.org", logo: "/logos/partners/google-org.png", wide: true },
  { name: "Mastercard Foundation", logo: "/logos/partners/mastercard-foundation.png", wide: true },
  { name: "Microsoft", logo: "/logos/partners/microsoft.png", wide: true },
  { name: "Netflix", logo: "/logos/partners/netflix.png", wide: false },
  { name: "European Union", logo: "/logos/partners/european-union.png", wide: false },
  { name: "KCB Foundation", logo: "/logos/partners/kcb-foundation.png", wide: true },
  { name: "GIZ", logo: "/logos/partners/giz.png", wide: false },
  { name: "AFD", logo: "/logos/partners/afd.png", wide: false },
  { name: "ICT Authority", logo: "/logos/partners/ict-authority.png", wide: true },
  { name: "Australian High Commission", logo: "/logos/partners/australian-high-commission.png", wide: false },
  { name: "Equity Group Foundation", logo: "/logos/partners/equity-group-foundation.png", wide: false },
  { name: "Challenge Fund", logo: "/logos/partners/challenge-fund.png", wide: false },
  { name: "French Ambassador", logo: "/logos/partners/french-ambassador.png", wide: false },
  { name: "M-PESA Foundation", logo: "/logos/partners/mpesa-foundation.png", wide: false },
  { name: "Warner Music Group", logo: "/logos/partners/warner-music-group.png", wide: false },
  { name: "Gulli", logo: "/logos/partners/gulli.jpeg", wide: false },
  { name: "Wadhwani Foundation", logo: "/logos/partners/wadhwani-foundation.png", wide: false },
];

export function PartnerLogos() {
  return (
    <section id="partners" className="bg-admf-green pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-label section-label-dark">
            Our Partners
          </span>
          <h2 className="section-heading section-heading-dark">
            Supported by Leading Organisations
          </h2>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 items-center mb-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`group flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/5 hover:border-white/15 px-3 md:px-4 relative transition-all duration-200 ${
                partner.wide
                  ? "col-span-2 h-16 md:h-20"
                  : "col-span-1 h-16 md:h-20"
              }`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.wide ? 200 : 120}
                height={partner.wide ? 50 : 80}
                className="object-contain max-w-full max-h-[80%] brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Academic Prestige Note */}
        <div className="text-center">
          <p className="text-white/40 text-sm italic">
            Reviewed by Harvard University; Ongoing collaboration with Yale
            Business School.
          </p>
        </div>
      </div>
    </section>
  );
}
