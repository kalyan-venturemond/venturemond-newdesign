"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ResourcesPage = () => {
    return (
        <div className="bg-[#0B0B0B] min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/home/bg4.gif')] bg-cover bg-center opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8"
            >
                {/* Heading */}
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight">
                    Resources — <span className="text-[#0BA57F] whitespace-nowrap">Launching Soon</span>
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                    A curated collection of our work, insights, and learnings from real projects and real production systems.
                    We're preparing in-depth articles, execution notes, and case breakdowns.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link href="/services">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#0BA57F] text-black px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#09c08f] transition-colors w-full sm:w-auto"
                        >
                            Explore Services
                        </motion.button>
                    </Link>

                    <Link href="/studio">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border border-[#333] text-white px-8 py-3 rounded-full font-semibold text-sm hover:border-[#0BA57F] hover:text-[#0BA57F] transition-colors w-full sm:w-auto"
                        >
                            View Studio
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ResourcesPage;
