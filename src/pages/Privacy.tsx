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

          <p>HiveIn is designed to help couples connect through daily questions, quizzes, and meaningful conversations. Your privacy is our top priority, and we are committed to protecting your personal information while providing you with the best possible experience.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">1. What We Collect</h2>
          <p>We collect only the minimum data necessary to provide and improve our services:</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e3d4c]">Metadata and Analytics</h3>
          <p>We collect anonymous metadata that is not linked to your personal identity, including:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Which questions users engage with most</li>
            <li>Time spent in different areas of the app</li>
            <li>Button interactions and user interface preferences</li>
            <li>App usage patterns and feature adoption</li>
          </ul>
          <p>This behavioral data helps us understand how to improve the product experience. We do not sell this data to third parties - it is used solely to make HiveIn better for our users.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e3d4c]">User-Generated Content</h3>
          <p className="font-semibold">Important: No user-inputted data is collected or analyzed by our team.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>All content you create (chat messages, quiz answers, question responses) is encrypted end-to-end</li>
            <li>This data is completely inaccessible to the HiveIn team</li>
            <li>Only you and your partner can access your shared content</li>
            <li>We cannot read, analyze, or use any of your personal conversations or responses</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">2. How We Use This Data</h2>
          <p>We use the anonymous metadata we collect to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Understand which daily questions resonate most with couples</li>
            <li>Improve quiz content and user engagement features</li>
            <li>Enhance the overall app experience and conversation flow</li>
            <li>Develop new features based on user interaction patterns</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">3. Camera Permission</h2>
          <p>HiveIn requests camera access for essential features and functionality:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Account Recovery:</strong> Scanning QR codes to recover your backup and restore your account</li>
            <li><strong>Profile Photos:</strong> Taking or selecting photos to personalize your profile</li>
            <li><strong>Future Features:</strong> Sharing images within conversations and other visual communication tools</li>
          </ul>
          <p>All image URLs are encrypted and completely inaccessible to our team. You will always be asked for permission before camera access, and you can revoke this permission at any time in your device settings.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">4. Your Rights and Control</h2>
          <p>You remain in control of your data. As a HiveIn user, you can:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Delete your account and all associated data</li>
            <li>Download your logs or data snapshots (upcoming feature)</li>
            <li>Request backup and encrypted exports</li>
            <li>Access your shared relationship history at any time</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">5. What We Never Do</h2>
          <p>We are committed to protecting your trust. We do not:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Sell your data</li>
            <li>Share personal information with third parties</li>
            <li>Track you across third-party websites</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">6. Data Storage and Security</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>All data is stored securely via Firebase, with encryption at rest and in transit</li>
            <li>Sensitive data like conversations and personal responses are end-to-end encrypted</li>
            <li>Access is tightly controlled and monitored internally</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">7. Updates to This Policy</h2>
          <p>This privacy policy reflects our current data practices for HiveIn's daily questions, quizzes, and chat features. As we continue to develop new features, we may update this policy to reflect any changes in our data handling practices.</p>
          <p>We encourage you to check this page periodically for the most up-to-date information about our privacy practices.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">8. Contact Us</h2>
          <p>If you have any questions or concerns about this policy, you can contact our team at <a href="mailto:team@hivein.app" className="text-[#1e3d4c] underline">team@hivein.app</a></p>
        </div>
      </div>
    </main>

    <Footer />
  </div>;
};

export default Privacy;
