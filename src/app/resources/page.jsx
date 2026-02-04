"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ResourcesPage = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-[90dvh] bg-[#0B0B0B] text-white overflow-hidden px-6 md:px-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/home/bg1.gif')"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]/95" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
            >
                <h1 className="heading font-extrabold leading-tight icon-glow">
                    Resources — <span className="text-[#0BA57F]">Launching Soon</span>
                </h1>

                <p className="text-gray-300 text-sm md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                    A curated collection of our work, insights, and learnings from real projects and real production systems. We’re preparing in-depth articles, execution notes, and case breakdowns.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Link href="/services" className="btn1">
                        Explore Services
                    </Link>
                    <Link href="/studio" className="btn2">
                        View Studio
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default ResourcesPage;
