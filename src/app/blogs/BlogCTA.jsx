"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BlogCTA = () => {
  return (
    <section className="relative text-white py-24 px-6 md:px-16 bg-[#0B0B0B] overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-b from-[#0BA57F]/10 via-black to-[#0B0B0B] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        
        <h2 className="heading font-extrabold leading-tight">
          Your story could be <span className="text-[#0BA57F]">next.</span>
        </h2>

       
        <p className="text-gray-300 para max-w-2xl mx-auto leading-relaxed">
          We build ventures worth sharing — products that inspire, scale, and last.
          Partner with us to create something that makes it to this page.
        </p>

       
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
          <Link
            href="/contact?model=studio&type=partner"
            className="btn1"
          >
            Partner With Venturemond
          </Link>
          <Link
            href="/contact?model=studio"
            className="btn2"
          >
            Start a Project
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogCTA;
