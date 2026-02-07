"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const studioProjects = [
    {
        title: "FleetFlow Studio",
        description: "Intelligent logistics platform for fleet tracking and predictive route optimization.",
        slug: "fleetflow-studio",
        logo: "/logos/fleetflow-studio.png"
    },
    {
        title: "MediCore Digital",
        description: "HIPAA-compliant remote patient monitoring platform for real-time healthcare data.",
        slug: "medicore-digital",
        logo: "/logos/medicore-digital.png"
    },
    {
        title: "LeadNest AI",
        description: "AI-driven lead intelligence and CRM workflow platform.",
        slug: "leadnest-ai",
        logo: "/logos/leadnest-ai.png"
    },
    {
        title: "FinVertex Systems",
        description: "Financial analytics and investment management platform.",
        slug: "finvertex-systems",
        logo: "/logos/finvertex-systems.png"
    },
    {
        title: "TaskForge Studio",
        description: "Productivity and project management platform for agile teams.",
        slug: "taskforge-studio",
        logo: "/logos/taskforge-studio.png"
    }
];

const StudioPortfolio = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="heading font-bold mb-4">
                        Studio <span className="text-[#0BA57F]">Portfolio</span>
                    </h2>
                    <p className="text-gray-400 para max-w-2xl mx-auto">
                        Ventures built from idea to scale through validation, MVP development, product strategy, and go-to-market execution.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {studioProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#111111] border border-[#0BA57F]/20 p-6 rounded-2xl hover:border-[#0BA57F]/50 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Logo */}
                            <div className="w-12 h-12 relative mb-4">
                                <Image
                                    src={project.logo}
                                    alt={project.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Case Study Link */}
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <Link
                                    href={`/portfolio/${project.slug}`}
                                    className="text-[#0BA57F] text-sm font-semibold hover:underline flex items-center gap-1"
                                >
                                    View Case Study
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudioPortfolio;
