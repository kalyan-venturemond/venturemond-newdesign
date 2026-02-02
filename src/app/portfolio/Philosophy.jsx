"use client";

import { motion } from "framer-motion";

const Philosophy = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-[#0BA57F]/20 rounded-3xl p-8 md:p-10"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0BA57F] mb-6">
                        We Focus on Outcomes, Not Logos.
                    </h3>

                    <p className="text-gray-300 para leading-relaxed mb-4">
                        Our work speaks through the systems we build, the problems we solve,
                        and the value we deliver — not through brand names on a portfolio page.
                    </p>

                    <p className="text-gray-300 para leading-relaxed">
                        Many of our best projects are under NDA or built for internal use.
                        What matters is execution, not exposure.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-gray-400 italic para mt-6"
                >
                    If you need references or detailed case studies, we're happy to share them privately.
                </motion.p>
            </div>
        </section>
    );
};

export default Philosophy;
