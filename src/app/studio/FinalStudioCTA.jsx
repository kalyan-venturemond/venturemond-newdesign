"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FinalStudioCTA = () => {
  return (
    <section className="relative text-white lg:py-16 md:py-10 py-5 md:px-16 px-6 text-center overflow-hidden bg-[#0B0B0B]">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0BA57F]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0BA57F]/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        
        <h2 className="heading font-bold leading-snug">
          Ready to <span className="text-[#0BA57F]">Bring Your Idea to Life?</span>
        </h2>

       
        <p className="text-gray-300 para max-w-2xl mx-auto leading-relaxed">
          Let’s design, build, and launch your next product together — with structure,
          clarity, and execution that delivers.
        </p>

       
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
          <Link
            href="/contact?model=studio&type=partner"
            className="btn1"
          >
            Partner With Studio
          </Link>
          <Link
            href="/contact?model=studio"
            className="btn2"
          >
            Schedule a Call
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalStudioCTA;
