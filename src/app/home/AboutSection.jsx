"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  const capabilities = [
    {
      text: "Helps founders and companies gain clarity on what to build",
      color: "from-[#0BA57F] to-[#08d9a5]"
    },
    {
      text: "Designs the right product strategy and technical infrastructure",
      color: "from-[#08d9a5] to-[#0BA57F]"
    },
    {
      text: "Builds AI-first, production-grade systems",
      color: "from-[#0BA57F] to-[#06b88a]"
    },
    {
      text: "Supports go-to-market and scale",
      color: "from-[#06b88a] to-[#0BA57F]"
    }
  ];

  return (
    <section className="relative bg-[#0B0B0B] text-white lg:py-24 md:py-20 py-16 px-6 md:px-16 overflow-hidden">

      {/* Animated Background Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#0BA57F]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#0BA57F]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h2 className="heading font-bold">
            Venturemond architects and engineers{" "}
            <span className="text-[#0BA57F]">scalable technology ventures</span>
          </h2>

          <p className="text-gray-300 para leading-relaxed max-w-3xl mx-auto">
            We're not just developing software. We're turning ambiguous ideas into structured, scalable ventures — engineering the foundation that serious products are built on.
          </p>
        </motion.div>


        {/* Creative Staggered Cards Layout */}
        <div className="relative max-w-5xl mx-auto">

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0BA57F]/10 border border-[#0BA57F]/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#0BA57F] animate-pulse"></div>
              <span className="text-sm md:text-base font-semibold text-[#0BA57F] tracking-wide">
                IN PRACTICAL TERMS
              </span>
            </div>
          </motion.div>

          {/* Staggered Capability Cards */}
          <div className="space-y-4">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className={`
                  group relative
                  ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                `}
              >
                <div className="relative bg-gradient-to-r from-[#111111] to-[#0B0B0B] border border-white/5 hover:border-[#0BA57F]/30 rounded-2xl p-6 md:p-8 transition-all duration-500 overflow-hidden">

                  {/* Gradient Accent Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color} opacity-60 group-hover:opacity-100 group-hover:w-2 transition-all duration-500`}></div>

                  {/* Floating Number */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <span className="text-6xl md:text-7xl font-black text-[#0BA57F]/5 group-hover:text-[#0BA57F]/10 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0BA57F]/0 via-[#0BA57F]/5 to-[#0BA57F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center space-y-8 pt-12"
        >
          <div className="inline-block">
            <p className="text-gray-400 italic text-lg md:text-xl para px-6 py-3 border-t border-b border-[#0BA57F]/20">
              Venture-grade engineering. Execution-first mindset. Built to scale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group px-8 py-4 para bg-[#0BA57F] text-black font-semibold rounded-full hover:bg-[#09c08f] transition-all text-center relative overflow-hidden"
            >
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 para border-2 border-[#0BA57F] text-[#0BA57F] font-semibold rounded-full hover:bg-[#0BA57F] hover:text-black transition-all text-center"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
