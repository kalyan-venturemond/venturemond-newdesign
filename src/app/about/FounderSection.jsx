"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const FounderSection = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="heading font-bold text-center mb-12 leading-snug"
                >
                    Meet the <span className="text-[#0BA57F]">Founder</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-[#0BA57F]/20 rounded-3xl p-8 md:p-12"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                        {/* Circular Portrait with Glow */}
                        <div className="relative shrink-0">
                            {/* Glow Ring */}
                            <div className="absolute inset-0 rounded-full bg-[#0BA57F]/20 blur-2xl scale-110"></div>

                            {/* Image Container */}
                            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#0BA57F]/40 shadow-2xl">
                                <Image
                                    src="/kavyanth1.png"
                                    alt="Kavyanth Munagala"
                                    fill
                                    className="object-cover object-[center_50%]"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <div className="space-y-2">
                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                    Kavyanth Munagala
                                </h3>

                                <p className="text-[#0BA57F] font-semibold text-lg md:text-xl">
                                    Founder & CEO
                                </p>

                                {/* Contact Links */}
                                {/* Contact Links */}
                                <div className="flex items-center gap-4 mt-3">
                                    <Link
                                        href="https://www.linkedin.com/in/kavyanthm/"
                                        target="_blank"
                                        className="text-gray-400 hover:text-[#0BA57F] transition-all duration-300 transform hover:scale-110"
                                        title="Connect on LinkedIn"
                                    >
                                        <Linkedin size={24} />
                                    </Link>

                                    <a
                                        href="mailto:kavyanth@venturemond.com"
                                        className="text-gray-400 hover:text-[#0BA57F] transition-all duration-300 transform hover:scale-110"
                                        title="Send Email"
                                    >
                                        <Mail size={24} />
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                                <p>
                                    Kavyanth is a product-focused operator who has spent years building systems
                                    that scale from early-stage MVPs to production platforms handling millions of users.
                                </p>

                                <p>
                                    His approach is simple: understand the problem deeply, design the right solution,
                                    and execute relentlessly until it ships.
                                </p>

                                <p>
                                    Before founding Venturemond, Kavyanth worked across product strategy,
                                    engineering, and growth giving him a rare end-to-end perspective on what
                                    it takes to build ventures that last.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FounderSection;
