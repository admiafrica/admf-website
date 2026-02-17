"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder — will integrate with endpoint later
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-light p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold mb-2">Thank you!</h3>
        <p className="text-muted">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-light p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            First Name
          </label>
          <input
            type="text"
            required
            className="w-full h-12 px-4 rounded-md border border-divider-light bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Last Name
          </label>
          <input
            type="text"
            required
            className="w-full h-12 px-4 rounded-md border border-divider-light bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          required
          className="w-full h-12 px-4 rounded-md border border-divider-light bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Subject
        </label>
        <select className="w-full h-12 px-4 rounded-md border border-divider-light bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
          <option value="">Select a subject</option>
          <option value="donation">Donation Enquiry</option>
          <option value="partnership">Corporate Partnership</option>
          <option value="scholarship">Scholarship Information</option>
          <option value="volunteer">Volunteering</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-divider-light bg-white text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full md:w-auto">
        Send Message
      </button>
    </form>
  );
}
