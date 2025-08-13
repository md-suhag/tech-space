import React from "react";
import { Separator } from "@/components/ui/separator";

const TermsAndConditions = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          By using TechSpace, you agree to the following terms and conditions.
          Please read them carefully before making any purchase or using our
          services.
        </p>
      </div>

      <Separator className="mb-8" />

      {/* Sections */}
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        {/* 1. Introduction */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            1. Introduction
          </h2>
          <p>
            These Terms & Conditions govern your use of the TechSpace website
            and services. By accessing or purchasing from our store, you agree
            to be bound by these terms.
          </p>
        </div>

        {/* 2. Eligibility */}
        <div>
          <h2 className="text-xl font-semibold text-primary">2. Eligibility</h2>
          <p>
            You must be at least 18 years old to place an order. If you are
            under 18, you may use our site only with involvement of a parent or
            guardian.
          </p>
        </div>

        {/* 3. Orders & Payments */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            3. Orders & Payments
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>All prices are listed in your local currency unless stated.</li>
            <li>Payment must be completed before your order is shipped.</li>
            <li>
              We reserve the right to cancel any order in case of payment
              issues, stock unavailability, or fraudulent activity.
            </li>
          </ul>
        </div>

        {/* 4. Shipping & Delivery */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            4. Shipping & Delivery
          </h2>
          <p>
            Delivery times are estimates and may vary based on location and
            courier service. TechSpace is not responsible for delays caused by
            third-party carriers.
          </p>
        </div>

        {/* 5. Returns & Refunds */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            5. Returns & Refunds
          </h2>
          <p>
            You may request a return or refund within 7 days of receiving your
            order, provided the item is unused, in original packaging, and in
            resellable condition. For more details, refer to our Returns Policy.
          </p>
        </div>

        {/* 6. Intellectual Property */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            6. Intellectual Property
          </h2>
          <p>
            All content on this website, including images, text, logos, and
            product descriptions, is the property of TechSpace and may not be
            reproduced without permission.
          </p>
        </div>

        {/* 7. Limitation of Liability */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            7. Limitation of Liability
          </h2>
          <p>
            TechSpace is not liable for any indirect, incidental, or
            consequential damages arising from the use of our products or
            website.
          </p>
        </div>

        {/* 8. Changes to Terms */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            8. Changes to Terms
          </h2>
          <p>
            We may update these terms at any time without prior notice. The
            updated version will be posted on this page.
          </p>
        </div>

        {/* 9. Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            9. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms & Conditions, contact us
            at:
          </p>
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

export default TermsAndConditions;
