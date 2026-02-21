import Image from "next/image";

const partners = [
  { name: "Safaricom Foundation", logo: "/images/partners/partner-2.png" },
  { name: "Mastercard Foundation", logo: "/images/partners/partner-3.png" },
  { name: "USAID", logo: "/images/partners/partner-4.png" },
  { name: "British Council", logo: "/images/partners/partner-5.png" },
  { name: "Google.org", logo: "" },
  { name: "UNESCO", logo: "" },
  { name: "Wadhwani Foundation", logo: "" },
  { name: "ICT Authority", logo: "" },
  { name: "FilmAid International", logo: "" },
  { name: "CFYE", logo: "" },
  { name: "GOYN", logo: "" },
  { name: "Hivos", logo: "" },
  { name: "GIZ", logo: "" },
  { name: "KFC", logo: "" },
  { name: "UNICEF", logo: "" },
  { name: "Rockefeller Foundation", logo: "" },
  { name: "Ford Foundation", logo: "" },
  { name: "SIDA", logo: "" },
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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 items-center mb-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-20 rounded-lg bg-warm px-4 relative"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={60}
                  className="object-contain max-w-full max-h-full"
                  unoptimized
                />
              ) : (
                <span className="text-muted text-xs text-center font-medium leading-tight">
                  {partner.name}
                </span>
              )}
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
