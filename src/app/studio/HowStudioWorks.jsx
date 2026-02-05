"use client";

import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import TimelineIcon from "@mui/icons-material/Timeline";
import ConstructionIcon from "@mui/icons-material/Construction";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const steps = [
    {
        id: 1,
        title: "MVP Build",
        desc: "We start with a engagement to validate your idea and build the initial product.",
        icon: <SearchIcon className="text-[#0BA57F] text-4xl animate-float drop-shadow-[0_0_6px_#0BA57F66]" />
    },
    {
        id: 2,
        title: "Launch & Traction",
        desc: "You own the MVP. Launch it, test it, and prove traction with our support.",
        icon: <RocketLaunchIcon className="text-[#0BA57F] text-4xl animate-float drop-shadow-[0_0_6px_#0BA57F66]" />
    },
    {
        id: 3,
        title: "Iterate & Scale",
        desc: "Rapid development cycles with continuous feedback and product refinement.",
        icon: <ConstructionIcon className="text-[#0BA57F] text-4xl animate-float drop-shadow-[0_0_6px_#0BA57F66]" />
    },
    {
        id: 4,
        title: "Optional Partnership",
        desc: "If traction is proven, we explore equity partnership for long-term growth.",
        icon: <TimelineIcon className="text-[#0BA57F] text-4xl animate-float drop-shadow-[0_0_6px_#0BA57F66]" />
    }
];

const HowStudioWorks = () => {
    return (
        <section className="relative bg-[#0B0B0B] text-white py-16 px-6 md:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0BA57F]/10 via-transparent to-transparent -z-10" />

            <div className="max-w-6xl mx-auto text-center space-y-14">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="heading font-bold mb-4">
                        How the Studio <span className="text-[#0BA57F]">Works</span>
                    </h2>
                    <p className="text-gray-300 para max-w-2xl mx-auto">
                        A structured path from idea to partnership built on validation and execution.
                    </p>
                </motion.div>

                <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 mt-10">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[32px] left-[6.7%] w-[88%] h-[2px] bg-[#0BA57F]/25 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.6 }}
                            className="relative flex flex-col items-center text-center md:w-auto z-10 px-2"
                        >
                            {/* Icon Circle */}
                            <div className="flex items-center justify-center w-16 h-16 bg-[#111] border border-[#0BA57F]/50 rounded-full mb-4 shadow-[0_0_15px_#0BA57F33] relative z-10">
                                {step.icon}
                            </div>

                            {/* Step Label */}
                            <p className="text-[#0BA57F] font-semibold text-sm mb-1">
                                Step {step.id}
                            </p>

                            {/* Title */}
                            <h3 className="xl:text-xl lg:text-lg font-semibold">{step.title}</h3>

                            {/* Description */}
                            <p className="text-gray-400 lg:text-sm text-[12px] mt-2 max-w-[200px] mx-auto leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowStudioWorks;
