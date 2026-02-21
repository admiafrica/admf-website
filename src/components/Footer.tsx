import Image from "next/image";

const sectionLinks = [
  { label: "Impact", href: "#impact" },
  { label: "Programs", href: "#programs" },
  { label: "Success Stories", href: "#stories" },
  { label: "Partners", href: "#partners" },
  { label: "Reports", href: "#reports" },
  { label: "Team", href: "#team" },
];

export function Footer() {
  return (
    <footer className="bg-admf-green-deep text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/admf-logo-cropped.png"
                alt="ADMI Foundation"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-bold text-lg tracking-tight">
                ADMI Foundation
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Investing in Africa&apos;s creative talent through scholarships,
              mentorship, and equipment grants.
            </p>
            <a
              href="https://admi.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:underline"
            >
              A programme of ADMI &rarr;
            </a>
          </div>

          {/* Section Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Sections
            </h4>
            <ul className="space-y-3">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a
                  href="mailto:partnerships@africadigitalmedia.org"
                  className="hover:text-primary transition-colors"
                >
                  partnerships@africadigitalmedia.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 ADMI Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-white/40 text-sm hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-white/40 text-sm hover:text-white/60 transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
