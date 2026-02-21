"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Impact", href: "#impact" },
  { label: "Programs", href: "#programs" },
  { label: "Stories", href: "#stories" },
  { label: "Partners", href: "#partners" },
  { label: "Reports", href: "#reports" },
  { label: "Team", href: "#team" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-divider-light">
      <div className="section-container">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
          >
            <Image
              src="/logos/generated-1771332403636.png"
              alt="ADMI Foundation"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="font-bold text-lg text-foreground tracking-tight">
              ADMI Foundation
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  activeSection === item.href
                    ? "text-primary bg-primary/5"
                    : "text-muted hover:text-foreground hover:bg-gray-50"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#partner" onClick={(e) => { e.preventDefault(); handleNavClick("#partner"); }} className="btn btn-primary text-sm">
              Donate
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-foreground transition-all",
                mobileMenuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-foreground transition-all",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-foreground transition-all",
                mobileMenuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-divider-light">
          <div className="section-container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "px-3 py-3 rounded-md text-base font-medium transition-colors",
                  activeSection === item.href
                    ? "text-primary bg-primary/5"
                    : "text-muted hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-divider-light mt-2">
              <a
                href="#partner"
                onClick={(e) => { e.preventDefault(); handleNavClick("#partner"); }}
                className="btn btn-primary w-full text-center"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
