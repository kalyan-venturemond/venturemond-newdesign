"use client";

import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const lookingFor = [
    "Founders with domain expertise or unique market insight",
    "Ideas that solve real, validated problems",
    "Willingness to iterate based on user feedback",
    "Commitment to execution, not just ideation",
    "Alignment on long-term vision and values"
];

const WhatWeLookFor = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16 border-b border-white/5">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                {/* Left Column: Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 sticky top-24"
                >
                    <h2 className="heading font-bold leading-tight">
                        What We <span className="text-[#0BA57F]">Look For.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        We don't invest in just ideas. We invest in founders who have the grit, insight, and ability to execute.
                    </p>
                    <div className="text-[#0BA57F] font-medium pt-4">
                        We're selective because we invest deeply.
                    </div>
                </motion.div>

                {/* Right Column: List */}
                <div className="space-y-8">
                    {lookingFor.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group flex gap-6 items-start border-b border-white/10 pb-8 last:border-none"
                        >
                            <span className="text-gray-600 font-mono text-sm mt-1 group-hover:text-[#0BA57F] transition-colors">
                                0{index + 1}
                            </span>
                            <h3 className="text-xl md:text-2xl font-medium text-gray-200 group-hover:text-white transition-colors">
                                {item}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeLookFor;
