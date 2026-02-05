"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FlagshipProduct = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16 border-t border-white/5">
            <div className="max-w-5xl mx-auto space-y-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-12 mb-16"
                >
                    <h2 className="heading font-bold">
                        Flagship <span className="text-[#0BA57F]">Product</span>
                    </h2>

                    {/* Supporting Text */}
                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-base md:text-lg text-gray-500 font-medium tracking-wide">
                            A real product, not a showcase
                        </p>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                            Stackly OS is built and used internally at Venturemond shaping how we design scalable, control-first systems.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-[#111] to-[#161616] border border-[#0BA57F]/20 p-10 md:p-14 rounded-3xl hover:border-[#0BA57F]/50 transition-all duration-500 shadow-2xl relative overflow-hidden group"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#0BA57F]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0BA57F]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col items-center text-center space-y-8">

                        {/* Logo */}
                        <div className="w-20 h-20 md:w-24 md:h-24 relative shadow-lg rounded-2xl overflow-hidden">
                            <Image
                                src="/logos/stackly1.png"
                                alt="Stackly OS Logo"
                                fill
                                className="object-cover"
                                unoptimized
                                priority
                            />
                        </div>

                        <div className="space-y-6 max-w-3xl">
                            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Stackly OS
                            </h3>

                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                A control-first workspace operating system built on open infrastructure.
                                Bringing files, collaboration, and internal workflows together in a single workspace you fully control.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-[#0BA57F]/80 uppercase tracking-widest pt-2">
                                <span>Open-Core</span>
                                <span className="text-gray-600">•</span>
                                <span>Modular</span>
                                <span className="text-gray-600">•</span>
                                <span>Private</span>
                            </div>
                        </div>

                        <div className="pt-8 w-full md:w-auto">
                            <Link
                                href="https://stackly-os-ven.vercel.app"
                                target="_blank"
                                className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0BA57F] text-[#0B0B0B] font-bold text-lg rounded-xl hover:bg-[#09c08f] transition-all transform hover:scale-[1.02] shadow-lg shadow-[#0BA57F]/20 w-full md:w-auto"
                            >
                                View Stackly OS
                                <ArrowForwardIcon className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default FlagshipProduct;
