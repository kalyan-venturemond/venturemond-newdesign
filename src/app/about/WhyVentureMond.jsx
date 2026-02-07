"use client";

import { motion } from "framer-motion";
import BoltIcon from "@mui/icons-material/Bolt";
import VerifiedIcon from "@mui/icons-material/Verified";
import PsychologyIcon from "@mui/icons-material/Psychology";

const pillars = [
    {
        icon: <BoltIcon className="text-[#0BA57F] text-4xl" />,
        text: "Execution over theory"
    },
    {
        icon: <VerifiedIcon className="text-[#0BA57F] text-4xl" />,
        text: "Production-first mindset"
    },
    {
        icon: <PsychologyIcon className="text-[#0BA57F] text-4xl" />,
        text: "Founder-level ownership"
    }
];

const WhyVentureMond = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
            <div className="max-w-4xl mx-auto text-center space-y-12">

                {/* Header Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="heading font-bold leading-tight">
                        Why Venturemond <span className="text-[#0BA57F]">Exists</span>
                    </h2>

                    <h3 className="text-xl md:text-2xl font-bold text-white">
                        Because ideas don’t fail execution does
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Venturemond exists to close the gap between ideas and real, production-ready systems.
                        We help founders and teams turn clarity into execution without fluff, delays, or half-built products.
                    </p>
                </motion.div>

                {/* 3 Pillar Cards */}
                <div className="grid md:grid-cols-3 gap-6 pt-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#111111] border border-white/5 rounded-xl p-6 flex flex-col items-center gap-4 hover:border-[#0BA57F]/30 transition-colors"
                        >
                            <div className="bg-[#0BA57F]/10 p-3 rounded-full">
                                {pillar.icon}
                            </div>
                            <span className="font-semibold text-gray-200">
                                {pillar.text}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyVentureMond;
