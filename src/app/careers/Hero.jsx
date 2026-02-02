"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white py-12 px-6 md:px-16 text-center overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h1 className="heading font-bold leading-tight">
          Join the <span className="text-[#0BA57F]">Venturemond</span> Journey.
        </h1>
        <p className="text-gray-300 para">
          We’re building the next generation of ventures and SaaS products — and we’re looking for 
          passionate innovators, creators, and builders to join us.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
