import Image from "next/image";

const partners = [
  { name: "AFD", logo: "/logos/partners/afd.png" },
  { name: "Australian High Commission", logo: "/logos/partners/australian-high-commission.png" },
  { name: "Challenge Fund", logo: "/logos/partners/challenge-fund.png" },
  { name: "Equity Group Foundation", logo: "/logos/partners/equity-group-foundation.png" },
  { name: "European Union", logo: "/logos/partners/european-union.png" },
  { name: "French Ambassador", logo: "/logos/partners/french-ambassador.png" },
  { name: "GIZ", logo: "/logos/partners/giz.png" },
  { name: "Google.org", logo: "/logos/partners/google-org.png" },
  { name: "Gulli", logo: "/logos/partners/gulli.jpeg" },
  { name: "ICT Authority", logo: "/logos/partners/ict-authority.png" },
  { name: "KCB Foundation", logo: "/logos/partners/kcb-foundation.png" },
  { name: "Mastercard Foundation", logo: "/logos/partners/mastercard-foundation.png" },
  { name: "Microsoft", logo: "/logos/partners/microsoft.png" },
  { name: "M-PESA Foundation", logo: "/logos/partners/mpesa-foundation.png" },
  { name: "Netflix", logo: "/logos/partners/netflix.png" },
  { name: "Wadhwani Foundation", logo: "/logos/partners/wadhwani-foundation.png" },
  { name: "Warner Music Group", logo: "/logos/partners/warner-music-group.png" },
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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 items-center mb-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center h-20 rounded-lg bg-white/10 hover:bg-white/20 border border-white/5 hover:border-white/15 px-4 relative transition-all duration-200"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={60}
                  className="object-contain max-w-full max-h-full brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                  unoptimized
                />
              ) : (
                <span className="text-white/60 text-xs text-center font-medium leading-tight">
                  {partner.name}
                </span>
              )}
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
