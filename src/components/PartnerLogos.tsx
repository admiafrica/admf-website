import Image from 'next/image';

const partners = [
  { name: "Safaricom Foundation", logo: "https://placehold.co/160x60/e5e7eb/6b7280?text=Safaricom" },
  { name: "Mastercard Foundation", logo: "https://placehold.co/160x60/e5e7eb/6b7280?text=Mastercard" },
  { name: "USAID", logo: "https://placehold.co/160x60/e5e7eb/6b7280?text=USAID" },
  { name: "British Council", logo: "https://placehold.co/160x60/e5e7eb/6b7280?text=British+Council" },
  { name: "Google.org", logo: "https://placehold.co/160x60/e5e7eb/6b7280?text=Google.org" },
  { name: "UNESCO", logo: "https://placehold.co/160x60/e5e7eb/6b7280?text=UNESCO" },
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
