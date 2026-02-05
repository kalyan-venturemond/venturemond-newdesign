"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ServicesHero = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-[90dvh] text-white overflow-hidden px-6 md:px-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/home/bg7.gif')"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]/95" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center max-w-3xl space-y-6"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="heading font-extrabold leading-tight"
                >
                    AI-First Software{" "}
                    <span className="text-[#0BA57F]">Built to Ship</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-300 text-sm md:text-lg lg:text-xl leading-relaxed mx-auto"
                >
                    We build production-grade AI agents, automation systems, and custom software
                    that solve real problems — fast, focused, and execution-first.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                >
                    <Link
                        href="https://cal.com/venture-mond-jsjuux/online-discovery-call-30min"
                        target="_blank"
                        className="btn1"
                    >
                        Schedule a call
                    </Link>
                    <Link
                        href="/contact"
                        className="btn2"
                    >
                        Explore How We Work
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ServicesHero;
