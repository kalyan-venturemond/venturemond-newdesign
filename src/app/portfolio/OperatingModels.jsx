"use client";

import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const OperatingModels = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="heading font-bold mb-4">
                        How We <span className="text-[#0BA57F]">Execute?</span>
                    </h2>
                    <p className="text-gray-300 para max-w-4xl mx-auto">
                        Whether you need custom software built or want to co-build a venture, we have a model that fits.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-gray-800 rounded-3xl p-8 md:p-10 text-left hover:border-[#0BA57F] transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CodeIcon className="text-[#0BA57F] text-4xl" />
                            <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                Services
                            </h3>
                        </div>
                        <p className="para text-gray-300 leading-relaxed">
                            Consulting + build engagements for AI agents, Automation systems, ERPs, CRMs, and custom platforms. You own the code. We deliver the system.
                        </p>
                    </motion.div>

                    {/* Studio */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-gray-800 rounded-3xl p-8 md:p-10 text-left hover:border-[#0BA57F] transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <RocketLaunchIcon className="text-[#0BA57F] text-4xl" />
                            <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                Studio
                            </h3>
                        </div>
                        <p className="para text-gray-300 leading-relaxed">
                            Co-build ventures from idea to scale. We validate, build the MVP, and partner with you for long-term growth. Shared risk, shared reward.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OperatingModels;
