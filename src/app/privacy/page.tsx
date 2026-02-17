import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ADMF',
  description: 'Privacy Policy for the African Diaspora Medical Foundation',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#002A23] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <p className="text-gray-300">
              The African Diaspora Medical Foundation (ADMF) is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our programmes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-300 mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Postal address and country of residence</li>
              <li>Scholarship application information (academic records, financial information, personal statements)</li>
              <li>Donation and payment information</li>
              <li>Volunteer application details</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-300 mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Process and evaluate scholarship applications</li>
              <li>Process donations and issue tax receipts</li>
              <li>Communicate with you about our programmes and services</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">3. Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-300 mb-4">
              Under the General Data Protection Regulation (GDPR), we process your personal data based on:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Consent:</strong> You have given clear consent for us to process your personal data</li>
              <li><strong>Contract:</strong> Processing is necessary for a contract you have with us</li>
              <li><strong>Legal obligation:</strong> Processing is necessary for compliance with the law</li>
              <li><strong>Legitimate interests:</strong> Processing is necessary for our legitimate interests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Service providers:</strong> Third parties who perform services on our behalf (payment processing, email delivery)</li>
              <li><strong>Educational institutions:</strong> When necessary for scholarship verification</li>
              <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>ADMI:</strong> Our parent organisation, the African Diaspora Medical Initiative</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">5. Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organisational security measures to protect your personal information. 
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">6. Data Retention</h2>
            <p className="text-gray-300">
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">7. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              Under GDPR and other privacy laws, you have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Data portability:</strong> Request transfer of your data</li>
              <li><strong>Object:</strong> Object to processing of your data</li>
              <li><strong>Withdraw consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@admf.org" className="text-[#8EBFB0] hover:underline">privacy@admf.org</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300">
              Our website uses cookies and similar tracking technologies to enhance user experience. You can control 
              cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">9. Third-Party Links</h2>
            <p className="text-gray-300">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              of these external sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">10. Children's Privacy</h2>
            <p className="text-gray-300">
              Our website is not intended for children under 16. We do not knowingly collect personal information from 
              children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">11. International Data Transfers</h2>
            <p className="text-gray-300">
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#8EBFB0] mb-4">13. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="text-gray-300 mt-4">
              African Diaspora Medical Foundation<br />
              Data Protection Officer<br />
              Email: <a href="mailto:privacy@admf.org" className="text-[#8EBFB0] hover:underline">privacy@admf.org</a><br />
              General enquiries: <a href="mailto:info@admf.org" className="text-[#8EBFB0] hover:underline">info@admf.org</a><br />
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
