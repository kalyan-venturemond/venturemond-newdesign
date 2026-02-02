"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CareersCTA = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white py-24 px-6 md:px-16 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h2 className="heading font-bold">
          Ready to <span className="text-[#0BA57F]">Build the Future</span> with Us?
        </h2>
        <p className="text-gray-300 para">
          Join Venturemond’s growing team of builders, innovators, and strategists. 
          Let’s create what’s next — together.
        </p>
        <a
          href="mailto:career@venturemond.com"
          className="inline-block px-8 py-3 bg-[#0BA57F] text-black font-semibold rounded-full hover:bg-[#09c08f] transition duration-300"
        >
          Apply Now → career@venturemond.com
        </a>
      </motion.div>
    </section>
  );
};

export default CareersCTA;
