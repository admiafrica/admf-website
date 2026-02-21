import Link from "next/link";

interface CTASectionProps {
  label?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTASection({
  label,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="bg-admf-green section-padding">
      <div className="section-container text-center">
        {label && (
          <span className="section-label section-label-dark">{label}</span>
        )}
        <h2 className="section-heading section-heading-dark mb-4">{title}</h2>
        <p className="section-subheading section-subheading-dark max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={primaryCta.href} className="btn btn-primary">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn btn-outline-dark">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
