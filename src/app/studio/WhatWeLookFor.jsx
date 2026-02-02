"use client";

import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const lookingFor = [
    "Founders with domain expertise or unique market insight",
    "Ideas that solve real, validated problems",
    "Willingness to iterate based on user feedback",
    "Commitment to execution, not just ideation",
    "Alignment on long-term vision and values"
];

const WhatWeLookFor = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="heading font-bold leading-snug"
                >
                    What We <span className="text-[#0BA57F]">Look For</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-[#111] border border-[#0BA57F]/20 rounded-2xl p-8 md:p-10"
                >
                    <ul className="space-y-4 text-left max-w-2xl mx-auto">
                        {lookingFor.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                className="flex items-start gap-4 text-gray-300 para"
                            >
                                <CheckCircleIcon className="text-[#0BA57F] shrink-0 mt-1" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-gray-400 italic para mt-6"
                >
                    We're selective because we invest deeply in every venture we build.
                </motion.p>
            </div>
        </section>
    );
};

export default WhatWeLookFor;
