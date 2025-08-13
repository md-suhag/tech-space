import React from "react";
import { Separator } from "@/components/ui/separator";

const ReturnPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Return & Refund Policy
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          At TechSpace, we want you to be completely satisfied with your
          purchase. This Return & Refund Policy outlines your rights and our
          obligations when returning a product.
        </p>
      </div>

      <Separator className="mb-8" />

      {/* Sections */}
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        {/* 1. Eligibility for Returns */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            1. Eligibility for Returns
          </h2>
          <p>
            You may request a return within <strong>7 days</strong> of receiving
            your order if the following conditions are met:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>The item is unused and in its original packaging</li>
            <li>The product is in the same condition as received</li>
            <li>Proof of purchase is provided</li>
          </ul>
        </div>

        {/* 2. Non-Returnable Items */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            2. Non-Returnable Items
          </h2>
          <p>The following items cannot be returned:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Opened or used electronics and accessories</li>
            <li>Gift cards or promotional vouchers</li>
            <li>Clearance or final sale items</li>
            <li>Personalized or custom-made products</li>
          </ul>
        </div>

        {/* 3. Return Process */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            3. Return Process
          </h2>
          <p>To initiate a return, please follow these steps:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>
              Contact our support team at <strong>support@techspace.com</strong>{" "}
              with your order details.
            </li>
            <li>Wait for approval and return instructions.</li>
            <li>
              Ship the product back to our return address (customer is
              responsible for shipping costs unless the return is due to our
              error).
            </li>
          </ol>
        </div>

        {/* 4. Refunds */}
        <div>
          <h2 className="text-xl font-semibold text-primary">4. Refunds</h2>
          <p>
            Once we receive and inspect your returned item, we will notify you
            of the refund status. If approved, refunds will be processed to your
            original payment method within <strong>5–10 business days</strong>.
          </p>
        </div>

        {/* 5. Damaged or Defective Items */}
        <div>
          <h2 className="text-xl font-semibold text-primary">
            5. Damaged or Defective Items
          </h2>
          <p>
            If your order arrives damaged or defective, please contact us within{" "}
            <strong>48 hours</strong> of delivery with photos of the product and
            packaging. We will arrange a replacement or full refund at no
            additional cost.
          </p>
        </div>

        {/* 6. Contact Us */}
        <div>
          <h2 className="text-xl font-semibold text-primary">6. Contact Us</h2>
          <p>For questions about our Return & Refund Policy, contact us at:</p>
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

export default ReturnPolicy;
