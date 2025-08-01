import React from "react";

const Refund = () => {
  return (
    <div>
      <div className="min-h-screen bg-white my-4 text-gray-800 px-4 md:px-12 py-10 max-w-4xl mx-auto font-sans leading-relaxed">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center flex items-center justify-center gap-2">
          <span>🔁</span> Refund Policy
        </h1>

        {/* Effective Date */}
        <p className="text-sm text-gray-500 text-center mb-8">
          Effective Date: 18th August 2025
        </p>

        {/* Intro Paragraph */}
        <p className="mb-6">
          At Lifeline IT Training Institute, we strive to ensure that all our
          students and clients receive high-quality education and support.
          However, we understand that certain situations may require a refund.
          This Refund Policy outlines the conditions under which refunds may be
          issued for courses, services, or subscriptions purchased from us.
        </p>

        {/* Section 1: Eligibility for Refund */}
        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            1. Eligibility for Refund
          </h2>
          <p className="mb-2">
            You may be eligible for a full or partial refund under the following
            conditions:
          </p>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              🔹 You have enrolled in a course but request a refund within 3
              days of payment and before accessing more than 10% of the course
              materials.
            </li>
            <li>
              🔹 The course or service purchased was canceled or not delivered
              due to a fault from our side.
            </li>
            <li>
              🔹 There was a technical error in payment (e.g., double payment or
              incorrect amount charged).
            </li>
          </ul>
        </section>

        {/* Section 2: Non-Refundable Items */}
        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            2. Non-Refundable Items
          </h2>
          <p className="mb-2">
            We do not offer refunds under the following circumstances:
          </p>
          <ul className="list-disc pl-8 space-y-1">
            <li>❌ You have completed more than 25% of the course.</li>
            <li>❌ Refund requests made after 7 days of enrollment.</li>
            <li>
              ❌ You failed to attend a live session or class without prior
              notice.
            </li>
            <li>❌ You downloaded course materials or certifications.</li>
            <li>❌ You violated our code of conduct or academic policy.</li>
          </ul>
        </section>

        {/* Section 3: Special Cases */}
        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            3. Special Cases
          </h2>
          <p>
            In exceptional cases (such as a medical emergency or accidental
            payment), students may submit a written request for refund with
            supporting documents. Final decision will be made at the discretion
            of the Administration Team.
          </p>
        </section>

        {/* Section 4: Refund Process */}
        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            4. Refund Process
          </h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              ✅ Refund requests must be sent via email to{" "}
              <a
                href="mailto:refund@lifelineitinstitute.com"
                className="text-blue-600 underline"
              >
                refund@lifelineitinstitute.com
              </a>{" "}
              with your payment receipt, student ID, and reason for refund.
            </li>
            <li>
              ✅ Approved refunds will be processed within 7–14 working days,
              returned via the original payment method (bKash, bank transfer,
              etc.).
            </li>
            <li>
              ✅ A processing fee of 5–10% may be deducted depending on the
              platform charges.
            </li>
          </ul>
        </section>

        {/* Section 5: Contact Us */}
        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            5. Contact Us
          </h2>
          <p>For any questions regarding this policy, please contact:</p>
          <ul className="list-none pl-0 space-y-1 mt-2">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:support@lifelineit.com"
                className="text-blue-600 underline"
              >
                support@lifelineit.com
              </a>
            </li>
            <li>📞 Phone: +8801887893100, +8801867101740</li>
          </ul>
        </section>

        {/* Footer note */}
        <p className="text-sm text-gray-600 mt-8">
          Lifeline IT Training Institute reserves the right to update or modify
          this policy at any time without prior notice. We encourage users to
          review this policy periodically.
        </p>
      </div>
    </div>
  );
};

export default Refund;
