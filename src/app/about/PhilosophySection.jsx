"use client";

import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SpeedIcon from "@mui/icons-material/Speed";
import PsychologyIcon from "@mui/icons-material/Psychology";

const principles = [
    {
        icon: <RocketLaunchIcon className="text-[#0BA57F]" />,
        title: "Build before you pitch",
        description: "Working prototypes beat polished decks. Show, don't tell."
    },
    {
        icon: <SpeedIcon className="text-[#0BA57F]" />,
        title: "Ship before you scale",
        description: "Get it live. Get feedback. Iterate fast. Perfect is the enemy of shipped."
    },
    {
        icon: <PsychologyIcon className="text-[#0BA57F]" />,
        title: "Execution > imagination",
        description: "Ideas are multipliers. Execution is the base. Without execution, ideas are worth zero."
    }
];

const PhilosophySection = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="heading font-bold text-center leading-snug"
                >
                    Our <span className="text-[#0BA57F]">Philosophy</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="overflow-hidden rounded-2xl border border-gray-800 bg-[#111]"
                >
                    <div className="grid grid-cols-2 bg-[#0BA57F]/10 text-sm md:text-base font-semibold text-[#0BA57F] border-b border-gray-800">
                        <div className="px-6 py-4 border-r border-gray-800">Principle</div>
                        <div className="px-6 py-4">What It Means</div>
                    </div>

                    {principles.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-2 border-b border-gray-800 last:border-none hover:bg-[#0BA57F]/5 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 px-6 md:py-5 py-2 border-r border-gray-800">
                                <div className="text-xl">{item.icon}</div>
                                <p className="para font-semibold">{item.title}</p>
                            </div>
                            <div className="px-6 md:py-5 py-3 para text-gray-300">{item.description}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PhilosophySection;
