"use client";

import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ApplicationProcess = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16 border-t border-[#0BA57F]/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading font-bold"
        >
          How to <span className="text-[#0BA57F]">Apply</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="para text-gray-300 max-w-2xl mx-auto"
        >
          Interested in joining our team? We’d love to hear from you. Send us your resume or LinkedIn profile — 
          we’ll get back to you within 48 hours.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-[#0BA57F] text-lg font-semibold mt-10">
          <a href="mailto:hello@venturemond.com" className="flex items-center gap-2 hover:underline">
            <EmailIcon /> career@venturemond.com
          </a>
          <a
            href="https://www.linkedin.com/company/venturemond"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <LinkedInIcon /> Venturemond LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
