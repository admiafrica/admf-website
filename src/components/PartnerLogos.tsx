const partners = [
  "Safaricom Foundation",
  "Mastercard Foundation",
  "USAID",
  "British Council",
  "Google.org",
  "UNESCO",
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
              key={partner}
              className="flex items-center justify-center h-20 rounded-lg bg-warm px-4"
            >
              <span className="text-muted font-medium text-sm text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
