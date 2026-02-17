import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | ADMF',
  description: 'Terms and Conditions for the African Diaspora Medical Foundation',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#002A23] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <p className="text-gray-300">
              Please read these Terms and Conditions carefully before using the African Diaspora Medical Foundation (ADMF) website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">2. Use of Website</h2>
            <p className="text-gray-300 mb-4">
              This website is provided for informational purposes about the African Diaspora Medical Foundation and its programmes. 
              You may use this website for lawful purposes only.
            </p>
            <p className="text-gray-300">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to any portion of the website</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Use any automated system to access the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">3. Donations</h2>
            <p className="text-gray-300 mb-4">
              All donations to ADMF are processed securely through third-party payment processors. By making a donation, 
              you agree to their respective terms and conditions.
            </p>
            <p className="text-gray-300">
              Donations are generally non-refundable. If you believe a donation was made in error, please contact us 
              at <a href="mailto:info@admf.org" className="text-[#8EBFB0] hover:underline">info@admf.org</a> within 
              30 days of the transaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300">
              The content on this website, including text, graphics, logos, images, and software, is the property of 
              ADMF or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">5. Scholarship Applications</h2>
            <p className="text-gray-300 mb-4">
              Information provided in scholarship applications must be accurate and truthful. ADMF reserves the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Verify all information provided in applications</li>
              <li>Reject or revoke scholarships based on false or misleading information</li>
              <li>Set eligibility criteria and make final decisions on all awards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300">
              ADMF shall not be liable for any direct, indirect, incidental, consequential, or punitive damages 
              arising from your use of this website or any information provided on it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">7. External Links</h2>
            <p className="text-gray-300">
              This website may contain links to external websites. ADMF is not responsible for the content or 
              practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">8. Changes to Terms</h2>
            <p className="text-gray-300">
              ADMF reserves the right to modify these terms at any time. Changes will be effective immediately 
              upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">9. Governing Law</h2>
            <p className="text-gray-300">
              These terms shall be governed by and construed in accordance with the laws of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">10. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-gray-300 mt-4">
              African Diaspora Medical Foundation<br />
              Email: <a href="mailto:info@admf.org" className="text-[#8EBFB0] hover:underline">info@admf.org</a><br />
              Website: <a href="https://admf.org" className="text-[#8EBFB0] hover:underline">www.admf.org</a>
            </p>
          </section>

          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              A programme of the <a href="https://admi.africa" className="text-[#8EBFB0] hover:underline">African Diaspora Medical Initiative (ADMI)</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
