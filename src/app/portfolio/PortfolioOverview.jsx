"use client";

import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const portfolioItems = [
    "Internal tools",
    "AI automation pipelines",
    "ERP and CRM systems",
    "MVPs turned production platforms"
];

const PortfolioOverview = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="heading font-bold leading-snug"
                >
                    What We've <span className="text-[#0BA57F]">Built</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-[#111] border border-[#0BA57F]/20 rounded-2xl p-8 md:p-10"
                >
                    <ul className="space-y-4 text-left max-w-2xl mx-auto">
                        {portfolioItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                className="flex items-center gap-4 text-gray-300 para"
                            >
                                <CheckCircleIcon className="text-[#0BA57F] shrink-0" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioOverview;
