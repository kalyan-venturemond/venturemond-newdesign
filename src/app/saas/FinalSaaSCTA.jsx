"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FinalSaaSCTA = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white py-12 px-6 md:px-16 overflow-hidden text-center">
     <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0BA57F]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0BA57F]/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        
        <h2 className="heading font-bold leading-snug">
          The <span className="text-[#0BA57F]">Future of Work</span> Starts Here.
        </h2>

       
        <p className="text-gray-300 para max-w-2xl mx-auto leading-relaxed">
          Join the waitlist for <span className="text-[#0BA57F] font-semibold">Venturemond Workspace</span> — 
          or collaborate with us to build the next generation of SaaS products.
        </p>

       
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
          <Link
            href="/workspace-waitlist"
            className="btn1"
          >
            Join Waitlist
          </Link>

          <Link
            href="/contact?model=saas&type=partner"
            className="btn2"
          >
            Partner With Venturemond SaaS
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalSaaSCTA;
