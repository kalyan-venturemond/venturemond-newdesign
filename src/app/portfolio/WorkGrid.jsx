"use client";

import { motion } from "framer-motion";
import LockIcon from "@mui/icons-material/Lock";

const workSamples = [
    {
        title: "AI Assistant App",
        category: "AI APP / INTERFACE",
        description: "Interactive conversational interface featuring persona-based AI assistants for fitness coaching, grammar correction, and personal productivity.",
        confidential: false
    },
    {
        title: "Event Sphere Client Dashboard",
        category: "CRM / DASHBOARD",
        description: "Client management dashboard for orders, subscriptions, and service tracking with clean operational workflows.",
        confidential: false
    },
    {
        title: "Horizon UI (Chakra)",
        category: "DASHBOARD UI",
        description: "Enterprise-ready admin dashboard UI built with scalable and reusable components for ERP and CRM systems.",
        confidential: false
    },
    {
        title: "COREUI Dashboard",
        category: "INTERNAL TOOLS",
        description: "Modular internal dashboard system designed for analytics, reporting, and business monitoring.",
        confidential: false
    },
    {
        title: "VentirX Platform",
        category: "ENTERPRISE PLATFORM",
        description: "Custom workflow management platform built to support structured business processes and scalable operations.",
        confidential: false
    }
];

const WorkGrid = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="heading font-bold mb-4">
                        Services <span className="text-[#0BA57F]">Portfolio</span>
                    </h2>
                    <p className="text-gray-400 para max-w-2xl mx-auto">
                        Client execution work across AI Agents, AI Automation, CRMs, and ERPs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {workSamples.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#111111] border border-[#0BA57F]/20 p-6 rounded-2xl hover:border-[#0BA57F]/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold tracking-wider text-[#0BA57F] border border-[#0BA57F] px-2 py-1 rounded-full uppercase">
                                    {work.category}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                                {work.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {work.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center pt-8 border-t border-white/5">
                    <p className="text-gray-500 text-sm italic">
                        Additional enterprise and confidential projects delivered under NDA.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WorkGrid;
