"use client";

import { motion } from "framer-motion";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";

const features = [
    {
        icon: <ReceiptLongIcon className="text-[#0BA57F] text-4xl" />,
        title: "Transparent Pricing",
        desc: "Consulting + build fee. No hidden costs, no surprises."
    },
    {
        icon: <VpnKeyIcon className="text-[#0BA57F] text-4xl" />,
        title: "Full IP Ownership",
        desc: "You get the code, docs, and credentials. You own what we build."
    },
    {
        icon: <NoAccountsIcon className="text-[#0BA57F] text-4xl" />,
        title: "No Lock-Ins",
        desc: "No long-term retainers. Freedom to scale independently."
    }
];

const EngagementModel = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto space-y-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="heading font-bold mb-4">
                        Simple <span className="text-[#0BA57F]">Engagement Model.</span>
                    </h2>
                    <p className="text-gray-400 para max-w-2xl mx-auto">
                        We prioritize clarity and ownership over dependency.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#111111] border border-white/5 p-8 rounded-2xl hover:border-[#0BA57F]/30 transition-all duration-300 group"
                        >
                            <div className="mb-6 bg-[#0BA57F]/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-[#0BA57F]/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center border-t border-white/10 pt-10"
                >
                    <p className="text-xl md:text-2xl font-medium text-gray-200">
                        We build. You own. <span className="text-[#0BA57F]">Simple as that.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default EngagementModel;
