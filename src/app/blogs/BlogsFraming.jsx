"use client";

import { motion } from "framer-motion";

const BlogsFraming = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-12 px-6 md:px-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-[#0BA57F]/20 rounded-3xl p-8 md:p-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0BA57F] mb-4">
                        Insights from the Build Floor
                    </h2>

                    <p className="text-gray-300 para leading-relaxed">
                        Real execution lessons from building ventures, shipping products, and scaling systems.
                        <br />
                        No theory. No fluff. Just what we've learned by doing.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-gray-400 italic para"
                >
                    These are the notes we wish we had when we started.
                </motion.p>
            </div>
        </section>
    );
};

export default BlogsFraming;
