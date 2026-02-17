import Image from 'next/image';

const partners = [
  { name: "Safaricom Foundation", logo: "/images/partners/partner-1.png" },
  { name: "Mastercard Foundation", logo: "/images/partners/partner-2.png" },
  { name: "USAID", logo: "/images/partners/partner-3.png" },
  { name: "British Council", logo: "/images/partners/partner-4.png" },
  { name: "Google.org", logo: "/images/partners/partner-5.png" },
  { name: "UNESCO", logo: "/images/partners/partner-6.png" },
];

export function PartnerLogos() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-label section-label-light">Our Partners</span>
          <h2 className="section-heading section-heading-light">
            Supported by Leading Organisations
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-20 rounded-lg bg-warm px-4 relative"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={60}
                className="object-contain max-w-full max-h-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
