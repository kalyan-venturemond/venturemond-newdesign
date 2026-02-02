"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AboutCTA = () => {
    return (
        <section className="relative text-white py-24 px-6 md:px-16 bg-[#0B0B0B] overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0BA57F]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0BA57F]/50 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto space-y-8"
            >
                <h2 className="heading font-bold leading-tight">
                    Let's Build <span className="text-[#0BA57F]">Together.</span>
                </h2>

                <p className="text-gray-300 para max-w-2xl mx-auto leading-relaxed">
                    Whether you're a founder with an idea or a business looking to build
                    a custom system — we're ready to execute.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                    <Link href="/contact" className="btn1">
                        Start a Conversation
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutCTA;
