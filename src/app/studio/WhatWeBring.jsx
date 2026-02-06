"use client";

import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import RouteIcon from "@mui/icons-material/Route";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CloudIcon from "@mui/icons-material/Cloud";
import HandshakeIcon from "@mui/icons-material/Handshake";

const whatWeBring = [
    {
        title: "Full-Stack Build",
        desc: "Design, engineering, and deployment — we handle the entire product lifecycle.",
        icon: <CodeIcon className="text-[#0BA57F] text-3xl" />
    },
    {
        title: "Market Validation",
        desc: "Deep user research and testing to ensure we solve the right problems.",
        icon: <QueryStatsIcon className="text-[#0BA57F] text-3xl" />
    },
    {
        title: "Product Strategy",
        desc: "Clear roadmaps and prioritization to move from MVP to scale fast.",
        icon: <RouteIcon className="text-[#0BA57F] text-3xl" />
    },
    {
        title: "Go-to-Market",
        desc: "Growth frameworks and launch strategies to get traction day one.",
        icon: <RocketLaunchIcon className="text-[#0BA57F] text-3xl" />
    },
    {
        title: "Scalable Infra",
        desc: "Production-grade architecture built to handle real user load securely.",
        icon: <CloudIcon className="text-[#0BA57F] text-3xl" />
    },
    {
        title: "Co-Founder Level",
        desc: "We don't just execute tickets; we worry about the business outcomes.",
        icon: <HandshakeIcon className="text-[#0BA57F] text-3xl" />
    }
];

const WhatWeBring = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4"
                >
                    <h2 className="heading font-bold">
                        What We <span className="text-[#0BA57F]">Bring?</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        We act as your technical co-founder, product team, and growth engine.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {whatWeBring.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#0BA57F]/30 transition-all duration-300 group"
                        >
                            <div className="mb-6 bg-[#0BA57F]/10 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-[#0BA57F]/20 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-center pt-8 border-t border-white/10"
                >
                    <p className="text-gray-500 italic">
                        All the capabilities of a venture studio, deployed for your success
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeBring;
