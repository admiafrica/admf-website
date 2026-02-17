import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  label?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  backgroundImage?: string;
}

export function HeroSection({
  label,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  dark = true,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className={`${dark ? "bg-admf-green" : "bg-white"} relative overflow-hidden`}
      style={{ paddingTop: 72 }}
    >
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover opacity-20"
              unoptimized
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-admf-green/90 to-admf-green/70" />
        </>
      )}
      <div className="section-container py-20 md:py-32 relative z-10">
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
