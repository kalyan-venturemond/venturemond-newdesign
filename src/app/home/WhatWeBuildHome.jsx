"use client";

import { motion } from "framer-motion";

const capabilities = [
    {
        number: "01",
        title: "AI Automation",
        desc: "Intelligent agents and autonomous workflows that drive operational efficiency and smarter decision-making.",
    },
    {
        number: "02",
        title: "Custom Platforms",
        desc: "Scalable internal tools, ERPs, and CRMs tailored specifically to your business operations and workflows.",
    },
    {
        number: "03",
        title: "Product Engineering",
        desc: "End-to-end development services taking you from rapid MVP validation to robust, high-scale production platforms.",
    }
];

const WhatWeBuildHome = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-32 px-6 md:px-16 relative overflow-hidden">
            {/* Subtle Background Grid */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: 'linear-gradient(#0BA57F 1px, transparent 1px), linear-gradient(90deg, #0BA57F 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Centered Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-4xl mx-auto"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                        What We <span className="text-[#0BA57F]">Build?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-6">
                        AI-first systems, products, and platforms — built to ship, scale, and last.
                    </p>
                    <div className="inline-block px-6 py-3 border border-[#0BA57F]/30 rounded-full">
                        <span className="text-base md:text-lg text-[#0BA57F] font-medium">
                            We don't build demos. We build production systems.
                        </span>
                    </div>
                </motion.div>

                {/* Horizontal Pillar Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-6">
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.7 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative h-full p-8 md:p-10 bg-gradient-to-br from-[#111111] to-[#0B0B0B] border border-white/5 hover:border-[#0BA57F]/30 transition-all duration-500 rounded-2xl">

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#0BA57F]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Number Badge */}
                                <div className="mb-8">
                                    <span className="text-6xl md:text-7xl font-bold text-[#0BA57F]/20 group-hover:text-[#0BA57F]/40 transition-colors duration-500">
                                        {item.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4 relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#0BA57F] transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    {/* Divider */}
                                    <div className="w-12 h-[2px] bg-[#0BA57F]/30 group-hover:w-full group-hover:bg-[#0BA57F]/60 transition-all duration-500"></div>

                                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhatWeBuildHome;
