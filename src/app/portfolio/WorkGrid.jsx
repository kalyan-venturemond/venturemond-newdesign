"use client";

import { motion } from "framer-motion";
import LockIcon from "@mui/icons-material/Lock";

const workSamples = [
    {
        title: "AI Automation Pipeline",
        category: "AI AUTOMATION",
        description: "End-to-end workflow automation system processing 10K+ tasks monthly with 99.8% accuracy.",
        confidential: false
    },
    {
        title: "Custom ERP System",
        category: "ENTERPRISE",
        description: "Full-stack ERP built for manufacturing operations with inventory, procurement, and analytics modules.",
        confidential: false
    },
    {
        title: "Internal Analytics Dashboard",
        category: "INTERNAL TOOL",
        description: "Real-time business intelligence platform aggregating data from 15+ sources.",
        confidential: true
    },
    {
        title: "Customer Portal & CRM",
        category: "CRM",
        description: "White-label customer management system with automated workflows and reporting.",
        confidential: true
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
                        Selected <span className="text-[#0BA57F]">Work</span>
                    </h2>
                    <p className="text-gray-400 para">
                        Some projects are confidential and cannot be publicly disclosed.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {workSamples.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#111111] border border-[#0BA57F]/20 p-8 rounded-2xl hover:border-[#0BA57F]/50 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold tracking-wider text-[#0BA57F] border border-[#0BA57F] px-3 py-1 rounded-full uppercase">
                                    {work.category}
                                </span>
                                {work.confidential && (
                                    <LockIcon className="text-gray-500 text-sm" />
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                                {work.title}
                            </h3>

                            <p className="text-gray-400 para leading-relaxed">
                                {work.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkGrid;
