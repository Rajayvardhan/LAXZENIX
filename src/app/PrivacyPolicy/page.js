
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container py-10 px-4">
      <div className="max-w-7xl mx-auto p-8 rounded-2xl shadow-md">
        <h2 className="text-center mt-20 text-xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-sm text-gray-500 mb-6">Last Updated: [Insert Date]</p>

        <section className="mb-6">
          <h4 className="text-xl font-semibold mb-2">1. Information We Collect</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Personal Information (Name, Email, Phone Number)</li>
            <li>Business Information (Company Name, Address)</li>
            <li>Technical Data (IP Address, Browser Type, Device Info)</li>
            <li>Usage Data (Pages visited, interactions)</li>
          </ul>                               
        </section>

        <section className="mb-6">
          <h4 className="text-xl font-semibold mb-2">2. How We Use Your Information</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>To provide and improve our services</li>
            <li>To respond to inquiries</li>
            <li>To send updates and notifications</li>
            <li>To analyze website performance</li>
          </ul>
        </section>

        <section className="mb-6">
          <h4 className="text-xl font-semibold mb-2">3. Sharing of Information</h4>
          <p className="text-gray-700">
            We do not sell your personal information. We may share data with trusted service providers or when required by law.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="text-xl font-semibold mb-2">4. Cookies</h4>
          <p className="text-gray-700">
            We use cookies to enhance user experience. You can disable cookies in your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="text-xl font-semibold mb-2">5. Data Security</h4>
          <p className="text-gray-700">
            We take appropriate security measures to protect your data.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="text-xl font-semibold mb-2">6. Your Rights</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Access your data</li>
            <li>Request correction or deletion</li>
            <li>Opt-out of communications</li>
          </ul>
        </section>

        <section className="mb-6">
          <h4 className="text-xl font-semibold mb-2">7. Contact Us</h4>
          <p className="text-gray-700">
            Email: your@email.com <br />
            Phone: +91-XXXXXXXXXX <br />
            Address: Your Company Address
          </p>
        </section>
      </div>
    </div>
  );
}

