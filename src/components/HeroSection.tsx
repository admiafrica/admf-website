import Link from "next/link";

interface HeroSectionProps {
  label?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
}

export function HeroSection({
  label,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  dark = true,
}: HeroSectionProps) {
  return (
    <section
      className={dark ? "bg-admf-green" : "bg-white"}
      style={{ paddingTop: 72 }}
    >
      <div className="section-container py-20 md:py-32">
        <div className="max-w-3xl">
          {label && (
            <span className={`section-label ${dark ? "section-label-dark" : "section-label-light"}`}>
              {label}
            </span>
          )}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed mb-10 max-w-2xl ${
              dark ? "text-white/70" : "text-muted"
            }`}
          >
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn btn-primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={`btn ${dark ? "btn-outline-dark" : "btn-outline"}`}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
