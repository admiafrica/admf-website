import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Impact Stories", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

const programmes = [
  { label: "Scholarships", href: "/programmes#scholarships" },
  { label: "Mentorship", href: "/programmes#mentorship" },
  { label: "Equipment Grants", href: "/programmes#equipment-grants" },
];

export function Footer() {
  return (
    <footer className="bg-admf-green text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">AF</span>
              </div>
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

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Programmes
            </h4>
            <ul className="space-y-3">
              {programmes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a
                  href="mailto:info@admf.africa"
                  className="hover:text-primary transition-colors"
                >
                  info@admf.africa
                </a>
              </li>
              <li>Caxton House, Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 ADMI Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/40 text-sm hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 text-sm hover:text-white/60 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
