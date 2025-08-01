import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="min-h-screen my-4 bg-white text-gray-800 px-4 md:px-12 py-10 max-w-4xl mx-auto font-sans">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          🔐 Privacy Policy
        </h1>

        {/* Effective Date */}
        <p className="text-sm text-gray-500 text-center mb-8">
          Effective Date: 18th August 2025
        </p>

        <div className="space-y-8 leading-relaxed text-base">
          {/* Introduction */}
          <section>
            <p>
              <strong>Lifeline IT Training Institute</strong> ("we", "our", "us"), a registered
              IT skill development and training institute <strong>(Trade License No:
              TRAD/CHTG/000307/2025)</strong>, is committed to safeguarding the privacy
              of all individuals who engage with our services either online or
              offline.
            </p>
            <p className="mt-2">
              This Privacy Policy explains how we collect, use, disclose, and
              protect your personal information in connection with your use of
              our website, mobile applications, and physical training centers.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>1️⃣</span> <h2>DEFINITIONS</h2>
            </div>
            <ul className="space-y-2 pl-5">
              <li className="flex items-start gap-2">
                <span>👤</span>
                <p>
                  <strong>"User", "You", "Your"</strong>: Any individual or
                  organization accessing or using our services.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span>🔒</span>
                <p>
                  <strong>"Personal Information"</strong>: Any data that
                  identifies or can be used to identify an individual — such as
                  name, contact number, address, email, education, etc.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span>🌐</span>
                <p>
                  <strong>"Website"</strong>: Refers to the official website of
                  Lifeline IT Training Institute.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <p>
                  <strong>"App"</strong>: Refers to any mobile applications
                  owned or managed by Lifeline IT.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span>🎓</span>
                <p>
                  <strong>"Services"</strong>: Includes all training,
                  certification, LMS access, live or recorded sessions, and
                  related support services.
                </p>
              </li>
            </ul>
          </section>

          {/* Information We Collect */}
          <section className="text-left">
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>2️⃣</span> <h2>INFORMATION WE COLLECT</h2>
            </div>
            <p className="font-medium mb-1">📝 User Provided Data:</p>
            <ul className="list-disc pl-8 space-y-1 ">
              <li>Full name, phone number, email address</li>
              <li>Educational background and training preferences</li>
              <li>Transaction/payment information (if applicable)</li>
              <li>Location (for offline training centers)</li>
            </ul>
            <p className="font-medium mt-4 mb-1">
              📲 Automatically Collected Data:
            </p>
            <ul className="list-disc pl-8 space-y-1">
              <li>Device type, IP address, browser type</li>
              <li>Usage information such as pages visited, session time</li>
            </ul>
          </section>

          {/* Use of Information */}
          <section className="text-left">
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>3️⃣</span> <h2>USE OF INFORMATION</h2>
            </div>
            <ul className="list-disc pl-8 space-y-1">
              <li>🔑 Provide access to our LMS and training platforms</li>
              <li>💳 Process payments and registration</li>
              <li>
                📢 Send course updates, promotional offers, and administrative
                messages
              </li>
              <li>⚙️ Improve our website and services</li>
              <li>⚖️ Ensure compliance with legal obligations</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="text-left">
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>4️⃣</span> <h2>DATA SHARING & THIRD PARTIES</h2>
            </div>
            <p>
              We do not sell or rent your personal information. However, we may
              share it with:
            </p>
            <ul className="list-disc pl-8 space-y-1 mt-1">
              <li>🏦 Authorized payment gateways</li>
              <li>🏛️ Government bodies when legally required</li>
              <li>🤝 Service providers (under strict confidentiality)</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="text-left">
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>5️⃣</span> <h2>COOKIES & TRACKING</h2>
            </div>
            <p>🍪 Our website may use cookies to:</p>
            <ul className="list-disc pl-8 space-y-1">
              <li>Enhance user experience</li>
              <li>Track usage patterns</li>
              <li>Personalize content</li>
            </ul>
            <p className="mt-2">
              You can disable cookies via browser settings, though it may limit
              some features.
            </p>
          </section>

          {/* Data Retention */}
          <section className="text-left">
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>6️⃣</span> <h2>DATA RETENTION & SECURITY</h2>
            </div>
            <ul className="list-disc pl-8 space-y-1">
              <li>
                🔐 Data is retained as long as necessary for intended purposes
                or legal requirements
              </li>
              <li>
                We use industry-standard security practices to protect from
                unauthorized access or loss
              </li>
            </ul>
          </section>

          {/* User Rights */}
          <section className="text-left">
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>7️⃣</span> <h2>USER RIGHTS</h2>
            </div>
            <ul className="list-disc pl-8 space-y-1">
              <li>🔍 Access and review your personal data</li>
              <li>
                🩹 Request corrections or deletion (as per legal allowance)
              </li>
              <li>🚫 Opt out of marketing communications</li>
            </ul>
          </section>

          {/* External Links */}
          <section className="text-left">
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>8️⃣</span> <h2>EXTERNAL LINKS</h2>
            </div>
            <p>
              🔗 Our website may contain links to third-party websites. We are
              not responsible for their content or privacy policies. Always
              review external policies before sharing information.
            </p>
          </section>

          {/* Policy Changes */}
          <section className="text-left">
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>9️⃣</span> <h2>CHANGES TO THIS POLICY</h2>
            </div>
            <p>
              🛠️ We reserve the right to update this policy at any time. Changes
              will be reflected with a new "Effective Date" and notified via our
              platform or email.
            </p>
          </section>

          {/* Contact Info */}
          <section className="text-left">
            <div className="flex items-center gap-2 text-xl font-semibold mb-2">
              <span>🔟</span>
              <h2>CONTACT INFORMATION</h2>
            </div>
            <ul className="list-none pl-0 space-y-1">
              <li>📍 Lifeline IT Training Institute</li>
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
              <li>
                🏢 Address: Khan Building (3rd Floor), 601 Sk. Mujib Road,
                Chowmuhuni, Chattogram
              </li>
            </ul>
          </section>

          {/* Agreement Notice */}
          <p className="text-sm text-gray-600 mt-6">
            ✅ By continuing to use our services, you agree to the terms of this
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
