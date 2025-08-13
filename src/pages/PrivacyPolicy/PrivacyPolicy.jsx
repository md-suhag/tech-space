import React from "react";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Your privacy is important to us. This Privacy Policy explains how
          TechSpace collects, uses, and protects your personal information.
        </p>
      </div>

      <Separator className="mb-8" />

      {/* Sections */}
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        {/* 1. Information We Collect */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            1. Information We Collect
          </h2>
          <p>
            We may collect the following types of personal information when you
            interact with our website:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Full name, email address, and phone number</li>
            <li>Billing and shipping address</li>
            <li>
              Payment details (processed securely via third-party providers)
            </li>
            <li>Account login details</li>
            <li>Browsing behavior and preferences</li>
          </ul>
        </div>

        {/* 2. How We Use Your Information */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            2. How We Use Your Information
          </h2>
          <p>We use your personal data for purposes such as:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Processing and delivering your orders</li>
            <li>Improving our website and customer service</li>
            <li>Sending promotional offers and updates (with your consent)</li>
            <li>Ensuring payment security and fraud prevention</li>
          </ul>
        </div>

        {/* 3. Data Protection */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            3. Data Protection
          </h2>
          <p>
            We implement strong security measures to protect your data from
            unauthorized access, alteration, or disclosure. However, no method
            of data transmission over the internet is 100% secure.
          </p>
        </div>

        {/* 4. Sharing Your Information */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell or rent your personal information. We may share your
            data with:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Service providers for payment processing, shipping, and marketing
            </li>
            <li>Legal authorities when required by law</li>
          </ul>
        </div>

        {/* 5. Cookies */}
        <div>
          <h2 className="text-xl font-semibold text-primary">5. Cookies</h2>
          <p>
            We use cookies to improve your browsing experience, track site
            performance, and personalize content. You can adjust cookie settings
            in your browser.
          </p>
        </div>

        {/* 6. Your Rights */}
        <div>
          <h2 className="text-xl font-semibold text-primary">6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. You may also opt-out of marketing communications at any
            time.
          </p>
        </div>

        {/* 7. Changes to This Policy */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated date.
          </p>
        </div>

        {/* 8. Contact Us */}
        <div>
          <h2 className="text-xl font-semibold text-primary">8. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Email: support@techspace.com</li>
            <li>Phone: +880 123 456 7890</li>
            <li>Address: 123 Tech Street, Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
