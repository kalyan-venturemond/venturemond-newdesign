"use client";

import { motion } from "framer-motion";

const capabilities = [
    {
        title: "AI & Automation",
        desc: "Intelligent agents and autonomous workflows that drive operational efficiency and smarter decision-making."
    },
    {
        title: "Custom Platforms",
        desc: "Scalable internal tools, ERPs, and CRMs tailored specifically to your business operations and workflows."
    },
    {
        title: "Product Engineering",
        desc: "End-to-end development services taking you from rapid MVP validation to robust, high-scale production platforms."
    },
    {
        title: "SaaS Products",
        desc: "Secure, design-led web applications built for growth, user retention, and long-term reliability."
    }
];

const WhatWeBuildHome = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
            <div className="max-w-5xl mx-auto space-y-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6"
                >
                    <h2 className="heading font-bold">
                        What We <span className="text-[#0BA57F]">Build</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        AI-first systems, products, and platforms — built to ship, scale, and last.
                    </p>
                </motion.div>

                {/* Capabilities Grid - Text Led */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-16">
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="space-y-3"
                        >
                            <h3 className="text-2xl font-semibold text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="pt-10 border-t border-white/10 text-center"
                >
                    <p className="text-xl md:text-2xl font-medium text-gray-200">
                        We don’t build demos. We build production systems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeBuildHome;
