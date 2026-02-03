"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FounderSection = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">
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
                    className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-[#0BA57F]/20 rounded-3xl p-8 md:p-10"
                >
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/3 shrink-0">
                            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#0BA57F]/30 shadow-2xl">
                                <Image
                                    src="/founder.png"
                                    alt="Kavyanth Munagala"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Kavyanth Munagala
                            </h3>

                            <p className="text-[#0BA57F] font-semibold para">
                                Founder & CEO
                            </p>

                            <div className="space-y-4 text-gray-300 para leading-relaxed">
                                <p>
                                    Kavyanth is a product-focused operator who has spent years building systems
                                    that scale — from early-stage MVPs to production platforms handling millions of users.
                                </p>

                                <p>
                                    His approach is simple: understand the problem deeply, design the right solution,
                                    and execute relentlessly until it ships.
                                </p>

                                <p>
                                    Before founding Venturemond, Kavyanth worked across product strategy,
                                    engineering, and growth — giving him a rare end-to-end perspective on what
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
