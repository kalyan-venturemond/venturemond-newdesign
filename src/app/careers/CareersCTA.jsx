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
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
          <Link href="https://cal.com/venture-mond-jsjuux/online-discovery-call-30min" target="_blank" className="btn1">
            Book a Discovery Call
          </Link>
          <Link href="/contact" className="btn2">
            Contact us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CareersCTA;
