import React from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return <div className="bg-white min-h-screen">
    <Helmet>
      <title>Privacy Policy - HiveIn</title>
      <meta name="description" content="Learn how HiveIn protects your privacy and handles your data." />
    </Helmet>

    <Navbar />

    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e3d4c] mb-8 text-center">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-500 mb-8 text-center">Effective Date: May 20, 2025</p>

          <p>HiveIn is currently in its early access phase. While we continue to build and refine the app, your privacy remains a top priority. This policy outlines the information we collect now and how we plan to handle user data once the full product is live.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">1. What We Collect (During Early Access)</h2>
          <p>At this stage, we collect only your email address through our website waitlist and early access forms. This allows us to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Share product updates with you</li>
            <li>Notify you when HiveIn becomes available</li>
            <li>Invite you to send an optional love letter to your partner</li>
          </ul>
          <p>If you choose to send a love letter, we store the message in an encrypted format. However, the email addresses involved (sender and receiver) remain visible to enable delivery. The contents of the mail will be visible to the mail provider (Resend), to allow it to send the mail. However, the contents will not be viewed by either the HiveIn or the Resend team.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">2. What We Will Collect (Once the App Is Live)</h2>
          <p>When HiveIn launches, we will collect additional data to power key features and personalize your experience. This may include:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Selected moods, habits, and reminders</li>
            <li>Inputs you submit within the app (like habit completions or mood tags)</li>
            <li>Encrypted chat messages and shared log entries</li>
          </ul>

          <p className="font-semibold">Important Notes:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>All user-generated data will be encrypted during transmission and storage</li>
            <li>Personal data like messages or logs will be inaccessible to our team</li>
            <li>Only non-identifiable metadata (e.g. "habit X is popular") may be used to improve product experience</li>
            <li>We will never associate behavioral data with your identity</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">3. How We Use This Data</h2>
          <p>We use the data we collect to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Display habits, moods, and logs between you and your partner</li>
            <li>Offer personalized nudges and suggestions</li>
            <li>Improve app experience and emotional connection features</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">4. Camera Permission</h2>
          <p>HiveIn may request camera access for future features like sending photos or scanning QR codes for pairing. You will be asked for permission before use. We never access your camera without your explicit consent, and camera access can be revoked at any time in your device settings.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">5. Third-party Services</h2>
          <p>HiveIn uses trusted third-party services to deliver a secure and reliable experience:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Firebase</strong> – for secure authentication, Firestore storage, and serverless functions</li>
            <li><strong>Resend</strong> – for sending verification emails and love letters</li>
            <li><strong>Amplitude</strong> – for app usage analytics (completely anonymized, separated for staging and production)</li>
          </ul>
          <p>None of these services receive raw personal data like message content. Only the minimum metadata required for function is used.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">6. Your Rights and Control</h2>
          <p>You remain in control of your data. As a HiveIn user, you can:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Delete your account and all associated data</li>
            <li>Download your logs or data snapshots (upcoming feature)</li>
            <li>Request backup and encrypted exports</li>
            <li>Access your shared relationship history at any time</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">7. What We Never Do</h2>
          <p>We are committed to protecting your trust. We do not:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Sell your data</li>
            <li>Share personal information with third parties</li>
            <li>Track you across third-party websites</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">8. Data Storage and Security</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>All data is stored securely via Firebase, with encryption at rest and in transit</li>
            <li>Sensitive data like logs and love letters are end-to-end encrypted</li>
            <li>Access is tightly controlled and monitored internally</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">9. Updates to This Policy</h2>
          <p>This privacy policy will evolve as the product develops. Once HiveIn is live, we will provide a detailed breakdown of in-app data collection, retention policies, and user controls.</p>
          <p>We encourage you to revisit this page when the app launches for the most accurate and up-to-date information.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">10. Contact Us</h2>
          <p>If you have any questions or concerns about this policy, you can contact our team at <a href="mailto:team@hivein.app" className="text-[#1e3d4c] underline">team@hivein.app</a></p>
        </div>
      </div>
    </main>

    <Footer />
  </div>;
};

export default Privacy;
