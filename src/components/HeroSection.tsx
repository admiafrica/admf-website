import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  label?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  heroImage?: string;
  showBadge?: boolean;
}

export function HeroSection({
  label,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  dark = true,
  heroImage,
  showBadge,
}: HeroSectionProps) {
  return (
    <section
      className={`${dark ? "bg-admf-green" : "bg-white"} relative overflow-hidden flex-1 flex flex-col`}
      style={{ paddingTop: 72 }}
    >
      {heroImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover object-right"
              unoptimized
              priority
            />
          </div>
          <div className="absolute inset-0 z-[5] bg-gradient-to-r from-admf-green from-25% to-transparent to-50%" />
        </>
      )}
      <div className="px-6 md:px-12 lg:px-20 py-12 md:py-20 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl">
          {label && (
            <span className={`section-label ${dark || heroImage ? "section-label-dark" : "section-label-light"}`}>
              {label}
            </span>
          )}
          {showBadge && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 mb-4">
              <span className="text-accent font-bold text-sm">Top 100 MSME</span>
              <span className="text-white/70 text-xs">Digital Transformation 2022</span>
            </div>
          )}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 ${
              dark || heroImage ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed mb-10 ${
              dark || heroImage ? "text-white" : "text-muted"
            }`}
          >
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {primaryCta && (
              <a href={primaryCta.href} className="btn btn-primary">
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`btn ${dark || heroImage ? "btn-outline-dark" : "btn-outline"}`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
