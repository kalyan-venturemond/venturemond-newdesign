"use client";

import { motion } from "framer-motion";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";

const services = [
    {
        icon: <SmartToyIcon className="text-[#0BA57F] text-5xl animate-float" />,
        title: "AI Agents",
        description: "Intelligent agents that automate decision-making, data processing, and customer interactions."
    },
    {
        icon: <SettingsEthernetIcon className="text-[#0BA57F] text-5xl animate-float" />,
        title: "AI Automation",
        description: "End-to-end workflow automation using AI to eliminate manual processes and boost efficiency."
    },
    {
        icon: <BusinessCenterIcon className="text-[#0BA57F] text-5xl animate-float" />,
        title: "ERP & CRM Development",
        description: "Custom enterprise resource planning and customer relationship management systems built for your business."
    },
    {
        icon: <CodeIcon className="text-[#0BA57F] text-5xl animate-float" />,
        title: "Custom Software & Platforms",
        description: "Tailored web applications, internal tools, and production-grade platforms designed to scale."
    }
];

const CoreServices = () => {
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
                        Core <span className="text-[#0BA57F]">Services</span>
                    </h2>
                    <p className="text-gray-300 para leading-relaxed max-w-3xl mx-auto">
                        We specialize in AI-powered solutions and custom software that drive measurable outcomes.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.6 }}
                            className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-gray-800 rounded-3xl p-5 md:p-7 lg:p-8 text-center hover:border-[#0BA57F] transition-all duration-300"
                        >
                            <div className="mb-6 flex justify-center">{service.icon}</div>
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 para leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
