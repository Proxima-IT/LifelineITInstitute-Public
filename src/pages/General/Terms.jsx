import React from 'react';

const Terms = () => {
    return (
        <div>
                <div className="min-h-screen bg-white text-gray-800 px-4 md:px-12 py-10 max-w-4xl mx-auto font-sans leading-relaxed">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center flex items-center justify-center gap-2">
        <span>📜</span> Terms & Conditions
      </h1>

      {/* Effective Date */}
      <p className="text-sm text-gray-500 text-center mb-8">
        Effective Date: 1st August 2025
      </p>

      {/* Intro Paragraph */}
      <p className="mb-6">
        Welcome to Lifeline IT Training Institute (“we”, “our”, “us”). These Terms & Conditions (“Terms”) outline the rules and regulations for using our website, applications, LMS, and physical training services. By accessing or using any of our services, you agree to comply with these Terms.
      </p>

      {/* Sections */}
      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>1️⃣</span> User Eligibility <span>👤</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>Must be at least 16 years old to register.</li>
          <li>Some courses may require prior educational qualifications.</li>
          <li>Providing false information during registration may result in termination of access.</li>
        </ul>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>2️⃣</span> Account Responsibility <span>🔐</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>Users must maintain the confidentiality of their login credentials.</li>
          <li>Any unauthorized use must be reported immediately.</li>
          <li>Sharing login with others is strictly prohibited.</li>
        </ul>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>3️⃣</span> Course Access & Duration <span>📚</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>Course access is provided after successful payment.</li>
          <li>Access is valid for the duration mentioned during enrollment.</li>
          <li>Content is for personal use only and cannot be copied or shared.</li>
        </ul>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>4️⃣</span> Payment & Refund Policy <span>💳</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>Payments must be made via approved methods.</li>
          <li>Refunds, if applicable, follow our official Refund Policy.</li>
          <li>Registration fees and processing charges are usually non-refundable.</li>
        </ul>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>5️⃣</span> User Behavior & Conduct <span>🤝</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>Students must show respect to trainers and staff.</li>
          <li>Offensive, illegal, or disruptive behavior will not be tolerated.</li>
          <li>Academic dishonesty (like plagiarism or cheating) may result in dismissal.</li>
        </ul>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>6️⃣</span> Intellectual Property Rights <span>📑</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>All materials (videos, notes, logos, etc.) belong to Lifeline IT.</li>
          <li>No user may reuse or distribute training materials without written permission.</li>
        </ul>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>7️⃣</span> Privacy Protection <span>🔏</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>We collect and store personal data securely.</li>
          <li>Your data is handled as per our Privacy Policy.</li>
          <li>We do not sell your personal information to third parties.</li>
        </ul>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>8️⃣</span> Service Availability <span>🌐</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>We aim to provide uninterrupted access to the platform.</li>
          <li>Maintenance or unforeseen events may occasionally limit availability.</li>
          <li>Lifeline IT reserves the right to modify or discontinue services at any time.</li>
        </ul>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>9️⃣</span> Termination of Access <span>❌</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>We may suspend or terminate access if terms are violated.</li>
          <li>You may cancel your registration by contacting us officially.</li>
        </ul>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>🔟</span> Changes to Terms & Conditions <span>🔄</span>
        </h2>
        <ul className="list-disc pl-8 space-y-1">
          <li>We may revise these Terms from time to time.</li>
          <li>Any changes will be posted with an updated Effective Date.</li>
          <li>Continued use of services indicates acceptance of the new terms.</li>
        </ul>
      </section>

      {/* Contact Info */}
      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          📞 Contact Information
        </h2>
        <p>For any concerns or clarifications:</p>
        <ul className="list-none pl-0 space-y-1 mt-2">
          <li>🏢 Lifeline IT Training Institute</li>
          <li>📍 Khan Building (3rd Floor), 601 Sk. Mujib Road, Chowmuhuni, Chattogram</li>
          <li>📧 Email: <a href="mailto:support@lifelineit.com" className="text-blue-600 underline">support@lifelineit.com</a></li>
          <li>📞 Phone: +8801887893100, +8801867101740</li>
        </ul>
      </section>

      {/* Agreement Notice */}
      <p className="text-sm text-gray-600 mt-8 text-center">
        ✅ By enrolling or using any service, you agree to the above Terms & Conditions.
      </p>
    </div>
        </div>
    );
};

export default Terms;