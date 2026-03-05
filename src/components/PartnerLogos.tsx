import Image from "next/image";

const partners = [
  { name: "Google.org", logo: "/logos/partners/google-org.png" },
  { name: "Mastercard Foundation", logo: "/logos/partners/mastercard-foundation.png" },
  { name: "Microsoft", logo: "/logos/partners/microsoft.png" },
  { name: "Netflix", logo: "/logos/partners/netflix.png" },
  { name: "European Union", logo: "/logos/partners/european-union.png" },
  { name: "KCB Foundation", logo: "/logos/partners/kcb-foundation.png" },
  { name: "GIZ", logo: "/logos/partners/giz.png" },
  { name: "AFD", logo: "/logos/partners/afd.png" },
  { name: "ICT Authority", logo: "/logos/partners/ict-authority.png" },
  { name: "Australian High Commission", logo: "/logos/partners/australian-high-commission.png" },
  { name: "Equity Group Foundation", logo: "/logos/partners/equity-group-foundation.png" },
  { name: "Challenge Fund", logo: "/logos/partners/challenge-fund.png" },
  { name: "French Ambassador", logo: "/logos/partners/french-ambassador.png" },
  { name: "M-PESA Foundation", logo: "/logos/partners/mpesa-foundation.png" },
  { name: "Warner Music Group", logo: "/logos/partners/warner-music-group.png" },
  { name: "Gulli", logo: "/logos/partners/gulli.jpeg" },
  { name: "Wadhwani Foundation", logo: "/logos/partners/wadhwani-foundation.png" },
];

export function PartnerLogos() {
  return (
    <section id="partners" className="bg-white section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-label section-label-light">
            Our Partners
          </span>
          <h2 className="section-heading section-heading-light">
            Supported by Leading Organisations
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200 w-[calc(33.333%-0.5rem)] sm:w-[calc(25%-0.5rem)] md:w-[calc(20%-0.8rem)] lg:w-[calc(16.666%-0.875rem)] aspect-[4/3] p-4 md:p-5"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>

        {/* Academic Prestige Note */}
        <div className="text-center">
          <p className="text-muted text-sm italic">
            Reviewed by Harvard University; Ongoing collaboration with Yale
            Business School.
          </p>
        </div>
      </div>
    </section>
  );
}
