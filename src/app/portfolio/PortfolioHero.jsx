"use client";

import { motion } from "framer-motion";

const PortfolioHero = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-[90dvh] text-white overflow-hidden px-6 md:px-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/home/herobg.gif')"
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
                    Work We've <span className="text-[#0BA57F]">Executed.</span>
                </h1>

                <p className="text-gray-300 para max-w-2xl mx-auto leading-relaxed">
                    Real systems. Real outcomes. Real execution.
                    <br />
                    We focus on what ships, not what looks good in a pitch deck.
                </p>
            </motion.div>
        </section>
    );
};

export default PortfolioHero;
