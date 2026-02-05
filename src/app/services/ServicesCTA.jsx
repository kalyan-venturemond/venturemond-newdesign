"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ServicesCTA = () => {
    return (
        <section className="relative text-center bg-[#0B0B0B] text-white lg:py-16 md:py-10 py-5 px-6 md:px-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0BA57F]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0BA57F]/50 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto space-y-8"
            >
                <h2 className="heading font-bold leading-snug">
                    Let's Build Something That <span className="text-[#0BA57F]">Ships</span>
                </h2>

                <p className="text-gray-300 para leading-relaxed">
                    Ready to turn your idea into a production-grade system?
                    Let's talk scope, timeline, and execution.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                    <Link href="/contact" className="btn1">
                        Schedule a call
                    </Link>
                    <Link href="/contact" className="btn2">
                        Contact us
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default ServicesCTA;
