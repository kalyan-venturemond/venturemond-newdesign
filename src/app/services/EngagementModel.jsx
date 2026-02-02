"use client";

import { motion } from "framer-motion";

const EngagementModel = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="heading font-bold leading-snug"
                >
                    Simple <span className="text-[#0BA57F]">Engagement Model</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-[#0BA57F]/20 rounded-3xl p-8 md:p-10 text-left space-y-6"
                >
                    <p className="text-gray-300 para leading-relaxed">
                        We work on a <span className="text-[#0BA57F] font-semibold">one-time consulting + build fee</span> basis.
                    </p>

                    <p className="text-gray-300 para leading-relaxed">
                        No retainers. No long-term lock-ins. Just clear scope, transparent pricing, and execution-focused delivery.
                    </p>

                    <p className="text-gray-300 para leading-relaxed">
                        You get a production-ready system, complete documentation, and the freedom to own and scale it independently.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-gray-400 italic para mt-6"
                >
                    We build. You own. Simple as that.
                </motion.p>
            </div>
        </section>
    );
};

export default EngagementModel;
