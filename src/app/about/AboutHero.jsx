"use client";

import { motion } from "framer-motion";

const AboutHero = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-[90dvh] text-white overflow-hidden px-6 md:px-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/home/bg9.gif')"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]/95" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-4xl mx-auto space-y-6"
            >
                <h1 className="heading font-bold leading-tight">
                    Built for <span className="text-[#0BA57F]">Execution</span>
                </h1>

                <p className="text-gray-300 para max-w-3xl mx-auto leading-relaxed">
                    Venturemond exists to close the gap between ideas and execution
                    <br />
                    We build systems that ship, scale, and deliver value not presentations that look good in boardrooms.
                </p>
            </motion.div>
        </section>
    );
};

export default AboutHero;
