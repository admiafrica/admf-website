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
}

export function HeroSection({
  label,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  dark = true,
  heroImage,
}: HeroSectionProps) {
  return (
    <section
      className={`${dark ? "bg-admf-green" : "bg-white"} relative overflow-hidden min-h-[500px]`}
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
      <div className="section-container py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          {label && (
            <span className={`section-label ${dark || heroImage ? "section-label-dark" : "section-label-light"}`}>
              {label}
            </span>
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
                  className={`btn ${dark || heroImage ? "btn-outline-dark" : "btn-outline"}`}
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
