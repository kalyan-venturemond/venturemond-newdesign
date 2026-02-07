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
        <section className="bg-[#0B0B0B] text-white py-32 px-6 md:px-16 relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0BA57F]/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Centered Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 max-w-3xl mx-auto"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                        What We <span className="text-[#0BA57F]">Look For?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-6">
                        We don't invest in just ideas. We invest in founders who have the grit, insight, and ability to execute.
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0BA57F]/10 border border-[#0BA57F]/30 rounded-full">
                        <span className="w-2 h-2 bg-[#0BA57F] rounded-full animate-pulse"></span>
                        <span className="text-base md:text-lg text-[#0BA57F] font-medium">
                            We're selective because we invest deeply.
                        </span>
                    </div>
                </motion.div>

                {/* Criteria Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {lookingFor.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full p-8 bg-gradient-to-br from-[#111111] to-[#0B0B0B] border border-white/5 hover:border-[#0BA57F]/30 rounded-2xl transition-all duration-500">

                                {/* Number Badge - Top Right */}
                                <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-[#0BA57F]/10 border border-[#0BA57F]/20 rounded-full">
                                    <span className="text-sm font-bold text-[#0BA57F]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Check Icon */}
                                <div className="mb-6">
                                    <CheckCircleIcon
                                        className="text-[#0BA57F] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                        sx={{ fontSize: 48 }}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl md:text-2xl font-semibold text-white leading-relaxed pr-12">
                                    {item}
                                </h3>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#0BA57F] to-transparent group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhatWeLookFor;
