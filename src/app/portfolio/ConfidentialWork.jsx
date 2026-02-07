"use client";

import { motion } from "framer-motion";
import LockIcon from "@mui/icons-material/Lock";

const confidentialProjects = [
    {
        category: "ENTERPRISE",
        description: "Custom system built under NDA for a Fortune 500 client."
    },
    {
        category: "AI AUTOMATION",
        description: "Proprietary automation platform for a regulated industry."
    }
];

const ConfidentialWork = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16 border-t border-white/5">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Additional <span className="text-[#0BA57F]">Work</span>
                    </h2>
                    <p className="text-gray-400 para max-w-2xl mx-auto">
                        Some projects are confidential and cannot be publicly disclosed.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {confidentialProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#111111] border border-white/10 p-8 rounded-2xl relative overflow-hidden"
                        >
                            {/* Blur overlay */}
                            <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-10" />

                            <div className="relative z-20 flex flex-col items-center justify-center text-center space-y-4 py-8">
                                <LockIcon className="text-gray-500 text-5xl" />
                                <span className="text-xs font-bold tracking-wider text-gray-500 border border-gray-700 px-3 py-1 rounded-full uppercase">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-400">
                                    Confidential Project
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConfidentialWork;
