"use client";

import { motion } from "framer-motion";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CodeIcon from "@mui/icons-material/Code";

const capabilities = [
    {
        title: "AI & Automation",
        desc: "Intelligent agents and autonomous workflows that drive operational efficiency and smarter decision-making.",
        icon: <SmartToyIcon className="text-[#0BA57F] text-3xl" />
    },
    {
        title: "Custom Platforms",
        desc: "Scalable internal tools, ERPs, and CRMs tailored specifically to your business operations and workflows.",
        icon: <IntegrationInstructionsIcon className="text-[#0BA57F] text-3xl" />
    },
    {
        title: "Product Engineering",
        desc: "End-to-end development services taking you from rapid MVP validation to robust, high-scale production platforms.",
        icon: <CodeIcon className="text-[#0BA57F] text-3xl" />
    }
];

const WhatWeBuildHome = () => {
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
                        What We <span className="text-[#0BA57F]">Build</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        AI-first systems, products, and platforms — built to ship, scale, and last.
                    </p>
                    <div className="text-[#0BA57F] font-medium pt-4 text-xl md:text-2xl font-medium">
                        We don’t build demos. We build production systems.
                    </div>
                </motion.div>

                {/* Right Column: List */}
                <div className="space-y-8">
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group flex gap-6 items-start border-b border-white/10 pb-8 last:border-none"
                        >
                            <div className="mt-1 p-3 rounded-lg bg-[#0BA57F]/10 border border-[#0BA57F]/20 group-hover:border-[#0BA57F]/50 transition-colors">
                                {item.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-medium text-gray-200 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeBuildHome;
