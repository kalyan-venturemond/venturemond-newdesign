"use client";

import { motion } from "framer-motion";

const WhyVentureMond = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-5xl mx-auto space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="heading font-bold text-center leading-snug"
                >
                    Why Venturemond <span className="text-[#0BA57F]">Exists</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-[#0BA57F]/20 rounded-3xl p-8 md:p-10 space-y-6"
                >
                    <div className="space-y-4 text-gray-300 para leading-relaxed">
                        <p>
                            <span className="text-[#0BA57F] font-semibold">The Problem:</span>{" "}
                            Most products fail not because the idea was bad, but because execution was weak.
                        </p>

                        <p>
                            Founders spend months building the wrong thing. Agencies deliver half-baked MVPs.
                            Consultants create roadmaps that never get implemented.
                        </p>

                        <p>
                            The gap between "great idea" and "working product" is where most ventures die.
                        </p>
                    </div>

                    <div className="border-t border-[#0BA57F]/20 pt-6 mt-6">
                        <p className="text-gray-300 para leading-relaxed">
                            <span className="text-[#0BA57F] font-semibold">Venturemond's Mission:</span>{" "}
                            We exist to bridge that gap. We build production-grade systems with founder-level
                            ownership and engineering-level precision. No fluff. No endless iterations. Just execution.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyVentureMond;
