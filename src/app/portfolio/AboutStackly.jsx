"use client";

import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const highlights = [
    "Control-first workspace foundation",
    "Open-core, modular architecture",
    "Internal usage + early customer pilots",
    "Designed for extensibility, not lock-in"
];

const AboutStackly = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16 border-t border-white/5">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    About <span className="text-[#0BA57F]">Stackly OS</span>
                </motion.h2>

                {/* Two-Column Layout */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

                    {/* Left: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Stackly OS is a control-first workspace layer built on open infrastructure, bringing files, collaboration, and internal workflows together under one system teams fully control.
                        </p>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Built on open source, used internally across Venturemond teams, and currently running early customer pilots, Stackly OS focuses on clarity, ownership, and production-grade foundations — not bloated suites.
                        </p>
                    </motion.div>

                    {/* Right: Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#111111] to-[#0B0B0B] border border-white/5 rounded-xl hover:border-[#0BA57F]/30 transition-all duration-300"
                            >
                                {/* Green Accent Dot */}
                                <div className="mt-1 shrink-0">
                                    <CheckCircleOutlineIcon
                                        className="text-[#0BA57F]"
                                        sx={{ fontSize: 24 }}
                                    />
                                </div>

                                {/* Text */}
                                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Muted Caption */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                </motion.div>

            </div>
        </section>
    );
};

export default AboutStackly;
