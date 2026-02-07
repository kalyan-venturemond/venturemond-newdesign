"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PortfolioHero = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-[90dvh] text-white overflow-hidden px-6 md:px-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/home/bg8.gif')"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]/95" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center max-w-5xl space-y-6"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="heading font-extrabold leading-tight"
                >
                    From Build to{" "}
                    <span className="text-[#0BA57F]">Production Deployment</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-300 text-sm md:text-lg lg:text-xl leading-relaxed mx-auto"
                >
                    Production-grade systems and ventures built, deployed, and scaled through our Services and Studio.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                >
                    <Link
                        href="/services"
                        className="btn1"
                    >
                        Explore Services
                    </Link>
                    <Link
                        href="/studio"
                        className="btn2"
                    >
                        View Studio
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PortfolioHero;
