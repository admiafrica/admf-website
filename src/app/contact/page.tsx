import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ADMI Foundation. Whether you have questions about scholarships, partnerships, or volunteering, we'd love to hear from you.",
};

const contactInfo = [
  {
    icon: "\u2709\uFE0F",
    label: "Email",
    value: "info@admf.africa",
    href: "mailto:info@admf.africa",
  },
  {
    icon: "\uD83D\uDCCD",
    label: "Address",
    value: "Caxton House, Kijabe Street, Nairobi, Kenya",
    href: undefined,
  },
  {
    icon: "\uD83D\uDD52",
    label: "Office Hours",
    value: "Monday \u2013 Friday, 8:00 AM \u2013 5:00 PM (EAT)",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        label="Contact Us"
        title="We'd Love to Hear From You"
        subtitle="Whether you have questions about our programmes, want to discuss a partnership, or are interested in volunteering, our team is here to help."
        dark
      />

      <section className="bg-white section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="section-heading section-heading-light mb-2">
                Send Us a Message
              </h2>
              <p className="section-subheading section-subheading-light mb-8">
                Fill out the form below and we&apos;ll get back to you within 2
                business days.
              </p>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <h2 className="section-heading section-heading-light mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-1">
                        {info.label}
                      </h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-primary text-sm hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-lg overflow-hidden bg-warm h-64 flex items-center justify-center">
                <p className="text-muted text-sm">Map embed coming soon</p>
              </div>

              {/* Back to ADMI */}
              <div className="mt-8 bg-warm rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-2">
                  Looking for ADMI?
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  ADMI Foundation is a programme of the Africa Digital Media
                  Institute. For course enquiries and admissions, visit the main
                  ADMI website.
                </p>
                <a
                  href="https://admi.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Visit admi.africa &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
