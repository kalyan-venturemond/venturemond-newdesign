"use client";

import { motion } from "framer-motion";
import CaseStories from "@/app/blogs/CaseStories";
import WorkGrid from "@/app/portfolio/WorkGrid";
import FounderNotes from "@/app/blogs/FounderNotes";
import BehindTheBuilds from "@/app/blogs/BehindTheBuilds";
import FAQ from "@/app/contact/FAQ";

const ResourcesPage = () => {
    return (
        <React.Fragment>
            {/* SECTION 0: Resources Intro */}
            {/* SECTION 0: Resources Intro */}
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
                        Resources
                    </h1>

                    <div className="space-y-4">
                        <p className="text-gray-300 text-sm md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                            A curated collection of our work, insights, and learnings —
                            <br className="hidden md:block" /> from real projects, real systems, and real execution.
                        </p>
                        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                            Explore how we build, think, and scale products at Venturemond.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <a href="#portfolio" className="btn1">
                            View Portfolio
                        </a>
                        <a href="#knowledge-base" className="btn2">
                            Read Articles
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 1: Portfolio — The Work */}
            <section id="portfolio">
                <div className="bg-[#0B0B0B] text-white pt-20 px-6 md:px-16 text-center">
                    <h2 className="heading font-bold mb-2">Portfolio</h2>
                    <p className="text-gray-400 para">Selected work and systems we've built</p>
                </div>
                <CaseStories />
                <WorkGrid />
            </section>

            {/* SECTION 2: Knowledge Base — The Thinking */}
            <section id="knowledge-base">
                <div className="bg-[#0B0B0B] text-white pt-20 px-6 md:px-16 text-center">
                    <h2 className="heading font-bold mb-2">Knowledge Base</h2>
                    <p className="text-gray-400 para">How we think and build</p>
                </div>
                <FounderNotes />
                <BehindTheBuilds />
            </section>

            {/* SECTION 3: Videos (Placeholder) */}
            <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16 border-t border-white/5">
                <div className="max-w-6xl mx-auto text-center space-y-8">
                    <h2 className="heading font-bold">Videos</h2>
                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-16 flex flex-col items-center justify-center space-y-4">
                        <div className="w-16 h-16 bg-[#0BA57F]/10 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0BA57F" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </div>
                        <p className="text-gray-400 para">Product demos, walkthroughs, and talks coming soon.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: FAQ */}
            <section className="bg-[#0B0B0B] pb-24 px-6 md:px-16">
                <FAQ />
            </section>

        </React.Fragment>
    );
};

import React from 'react';

export default ResourcesPage;
