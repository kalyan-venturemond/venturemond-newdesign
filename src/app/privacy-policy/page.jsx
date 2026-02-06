"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "1. Overview",
    content: (
      <>
        <p>
          Welcome to <span className="text-[#0BA57F] font-semibold">Venturemond</span>.
          Venturemond (“we”, “our”, or “us”) operates a technology company that includes
          two divisions:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-300">
          <li>Venturemond Services — A production engineering division building complex software systems.</li>
          <li>Venturemond Studio — A full-stack venture building and product execution division.</li>
        </ul>
        <p className="mt-3">
          This Privacy Policy explains how we collect, use, store, and protect your information
          when you interact with our website, products, or services. By visiting our website
          or submitting information through any of our forms, you agree to this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>We collect information in the following ways:</p>
        <p className="mt-3 font-semibold text-[#0BA57F]">a. Information You Provide</p>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-300">
          <li>Name</li>
          <li>Email address</li>
          <li>Company or organization name</li>
          <li>Project or product details</li>
          <li>Optional info like budget, timelines, or preferences</li>
        </ul>

        <p className="mt-4 font-semibold text-[#0BA57F]">b. Automatically Collected Data</p>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-300">
          <li>Browser type and version</li>
          <li>Device and operating system</li>
          <li>IP address</li>
          <li>Usage data and page visits</li>
        </ul>

        <p className="mt-4 font-semibold text-[#0BA57F]">c. Cookies</p>
        <p>We use minimal cookies to improve functionality and understand usage. You can disable cookies via your browser.</p>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <ul className="list-disc ml-6 space-y-1 text-gray-300">
        <li>Responding to your inquiries or submissions</li>
        <li>Providing access to our products (like Venturemond Workspace)</li>
        <li>Scheduling meetings or calls</li>
        <li>Sending updates about our services, if you opt in</li>
        <li>Improving our website and user experience</li>
      </ul>
    ),
  },
  {
    title: "4. Data Storage and Security",
    content: (
      <p>
        We use appropriate security measures to protect your data from unauthorized access,
        alteration, or disclosure. Your data may be securely stored on servers managed by
        reputable providers (like Google Cloud, AWS, or Zoho) in compliance with applicable laws.
      </p>
    ),
  },
  {
    title: "5. Data Retention",
    content: (
      <p>
        We retain your personal data only as long as necessary or as required by law. You may
        contact us at <span className="text-[#0BA57F]">hello@venturemond.com</span> to request removal.
      </p>
    ),
  },
  {
    title: "6. Sharing of Information",
    content: (
      <ul className="list-disc ml-6 space-y-1 text-gray-300">
        <li>With trusted partners working with Venturemond to execute your project</li>
        <li>When required by law or regulation</li>
        <li>To protect the safety, rights, or integrity of our users or services</li>
      </ul>
    ),
  },
  {
    title: "7. Your Rights",
    content: (
      <ul className="list-disc ml-6 space-y-1 text-gray-300">
        <li>Access, correct, or delete your personal data</li>
        <li>Withdraw consent for data processing</li>
        <li>Request a copy of your stored information</li>
      </ul>
    ),
  },
  {
    title: "8. Third-Party Links",
    content: (
      <p>
        Our website or emails may contain links to third-party sites. We are not responsible
        for their privacy practices or content.
      </p>
    ),
  },
  {
    title: "9. Children’s Privacy",
    content: (
      <p>
        Venturemond does not knowingly collect personal information from anyone under the age
        of 16. If you believe your child has provided information, contact us to remove it.
      </p>
    ),
  },
  {
    title: "10. Updates to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. Revisions will be posted with an
        updated “Last Updated” date.
      </p>
    ),
  },
  {
    title: "11. Contact Us",
    content: (
      <>
        <p>
          For any questions regarding this Privacy Policy, you can reach us at:
        </p>
        <p className="mt-3">
          <span className="text-[#0BA57F] font-semibold">Venturemond</span><br />
          4th Floor, Bizness Square, Hitec City, Hyderabad – 500084<br />
          Email: <span className="text-[#0BA57F]">hello@venturemond.com</span><br />
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/company/venturemond"
            target="_blank"
            className="text-[#0BA57F] underline hover:text-[#09c08f]"
          >
            Venturemond LinkedIn
          </Link>
        </p>
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-16"
      >

        <div className="text-center space-y-2">
          <h1 className="heading font-bold">
            Privacy Policy — <span className="text-[#0BA57F]">Venturemond</span>
          </h1>
          <p className="text-gray-400">Last Updated: November 2025</p>
        </div>


        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#111] border border-[#0BA57F]/20 p-6 md:p-8 rounded-2xl hover:border-[#0BA57F]/40 transition"
            >
              <h2 className="text-xl font-semibold text-[#0BA57F] mb-3">
                {section.title}
              </h2>
              <div className="text-gray-300 leading-relaxed text-[15px]">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;
