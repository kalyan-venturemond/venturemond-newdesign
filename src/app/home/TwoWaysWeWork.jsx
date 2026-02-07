"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const TwoWaysWeWork = () => {
    return (
        <section className="relative bg-[#0B0B0B] text-white lg:py-16 md:py-10 py-5 px-6 md:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0BA57F]/10 via-transparent to-transparent -z-10" />

            <div className="max-w-6xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="heading font-bold mb-6">
                        Two Ways We <span className="text-[#0BA57F]">Work</span>
                    </h2>
                    <p className="text-gray-300 para leading-relaxed max-w-4xl mx-auto">
                        Whether you need custom software built or want to co-build a venture, we have a model that fits.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 mt-12">
                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-gray-800 rounded-3xl p-5 md:p-7 lg:p-10 text-left hover:border-[#0BA57F] transition-all duration-300"
                    >
                        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#0BA57F] mb-4">
                            <CodeIcon className='animate-float drop-shadow-[0_0_6px_#0BA57F66]' /> Services
                        </h3>
                        <p className="para text-gray-300 leading-relaxed mb-6">
                            Consulting + build engagements for AI agents, automation systems,
                            ERPs, CRMs, and custom platforms. You own the code. We deliver the system.
                        </p>
                        <Link
                            href="/services"
                            className="para px-6 py-3 bg-[#0BA57F] text-black font-semibold rounded-full hover:bg-[#09c08f] transition inline-block"
                        >
                            Explore Services
                        </Link>
                    </motion.div>

                    {/* Studio */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-gray-800 rounded-3xl p-5 md:p-7 lg:p-10 text-left hover:border-[#0BA57F] transition-all duration-300"
                    >
                        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#0BA57F] mb-4">
                            <RocketLaunchIcon className='animate-float drop-shadow-[0_0_6px_#0BA57F66]' /> Studio
                        </h3>
                        <p className="para text-gray-300 leading-relaxed mb-6">
                            Co-build ventures from idea to scale. We validate, build the MVP, and optionally
                            partner with you for long-term growth. Shared risk, shared reward.
                        </p>
                        <Link
                            href="/studio"
                            className="para px-6 py-3 border border-[#0BA57F] text-[#0BA57F] font-semibold rounded-full hover:bg-[#0BA57F] hover:text-black transition inline-block"
                        >
                            Explore Studio
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TwoWaysWeWork;
