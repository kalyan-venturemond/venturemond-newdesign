"use client";

import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";

const credibilityPoints = [
    {
        icon: <TrendingUpIcon className="text-[#0BA57F] text-4xl" />,
        stat: "10K+",
        label: "Tasks Automated Monthly"
    },
    {
        icon: <VerifiedIcon className="text-[#0BA57F] text-4xl" />,
        stat: "15+",
        label: "Production Systems Shipped"
    },
    {
        icon: <SpeedIcon className="text-[#0BA57F] text-4xl" />,
        stat: "45 Days",
        label: "Average MVP Timeline"
    }
];

const WhyVenturemondHome = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="heading font-bold mb-4">
                        Why <span className="text-[#0BA57F]">Venturemond?</span>
                    </h2>
                    <p className="text-gray-300 para max-w-2xl mx-auto">
                        We don't just talk about execution — we prove it with every system we ship.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-3 gap-8">
                    {credibilityPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-[#0BA57F]/20 rounded-2xl p-8 text-center hover:border-[#0BA57F]/50 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-4">{point.icon}</div>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0BA57F] mb-2">
                                {point.stat}
                            </h3>
                            <p className="text-gray-300 para">{point.label}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-center text-gray-400 italic para mt-8"
                >
                    Real systems. Real outcomes. Real execution.
                </motion.p>
            </div>
        </section>
    );
};

export default WhyVenturemondHome;
