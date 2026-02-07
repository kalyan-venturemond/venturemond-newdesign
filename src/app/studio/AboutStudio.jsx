"use client";

import { motion } from "framer-motion";

const AboutStudio = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white md:py-12 py-8 px-6 md:px-16 overflow-hidden">

      <div className="absolute w-[400px] h-[400px] bg-[#0BA57F]/10 blur-[150px] rounded-full top-1/3 left-1/2 -translate-x-1/2 -z-10"></div>

      <div className="max-w-5xl mx-auto text-center space-y-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading font-bold leading-snug"
        >
          We’re not an <span className="text-[#0BA57F]">agency</span> We’re your{" "}
          <span className="text-[#0BA57F]">co-build partner</span>
        </motion.h2>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 para leading-relaxed max-w-3xl mx-auto space-y-4"
        >
          <p>Most ideas fail in execution, not imagination.</p>
          <p>
            Venturemond Studio exists to fix that. We combine startup thinking, technical
            precision, and business clarity to help founders go from zero to launch — faster
            and smarter.
          </p>
          <p>
            From early-stage validation to complete product delivery, we build with speed,
            intent, and accountability.
          </p>
        </motion.div>


        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative para font-semibold text-[#0BA57F] mt-10"
        >
          <p >We don’t just build projects. We build ventures.</p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AboutStudio;
