"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSaaS = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white py-8 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-4"
        >
          <h2 className="heading font-bold leading-snug ">
            Software that <span className="text-[#0BA57F]">thinks</span>,{" "}
            <span className="text-[#0BA57F]">scales</span>, and{" "}
            <span className="text-[#0BA57F]">performs</span>
          </h2>

          <p className="text-gray-300 para leading-relaxed">
            Venturemond SaaS is our product innovation division — focused on
            building modern, cloud-first tools that make technology
            frictionless.
          </p>

          <p className="text-gray-400 para leading-relaxed">
            We design products where privacy, intelligence, and experience
            converge — giving teams better control, speed, and visibility.
          </p>

          <p className="text-gray-400 para leading-relaxed">
            Every platform we build is engineered to simplify complexity,
            automate processes, and help organizations focus on growth.
          </p>

          <quote className="border-l-4 para border-[#0BA57F] pl-4 italic text-[#0BA57F] text-lg font-medium mt-8">
            “We don’t just build software. We build systems that work smarter.”
          </quote>
        </motion.div>

        {/* Right  */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div
            className="relative bg-cover bg-center w-[320px]  h-[320px] md:w-[100%] md:h-[400px]"
            style={{
              backgroundImage: "url('/home/Cube-gif.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSaaS;
