"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="relative text-center bg-[#0B0B0B] text-white lg:py-16 md:py-10 py-5 px-6 md:px-16 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h2 className="heading font-bold leading-snug ">
          Ready to <span className="text-[#0BA57F]">Build the Future?</span>
        </h2>

        <p className="text-gray-300 para leading-relaxed">
          Partner with{" "}
          <span className="text-[#0BA57F] font-semibold">Venturemond</span> to
          design, build, and scale your next product — fast, strategic, and
          future-ready.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
          <Link href="/contact" className="btn1">
            Partner With Us
          </Link>
          <Link href="/contact" className="btn2">
            Contact Us
          </Link>
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0BA57F]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0BA57F]/50 to-transparent" />
    </section>
  );
};

export default FinalCTA;
