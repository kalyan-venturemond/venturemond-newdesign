"use client";

import { motion } from "framer-motion";

const logos = [
    { name: "n8n", src: "https://cdn.simpleicons.org/n8n/CFD6D4" },
    {
        name: "OpenAI",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
    },
    {
        name: "AWS",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    { name: "ERPNext", src: "https://cdn.simpleicons.org/erpnext/CFD6D4" },
    { name: "Docker", src: "https://cdn.simpleicons.org/docker/CFD6D4" },
    { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/CFD6D4" },
    { name: "Redis", src: "https://cdn.simpleicons.org/redis/CFD6D4" },
    { name: "Linux", src: "https://cdn.simpleicons.org/linux/CFD6D4" },
    { name: "GitHub", src: "https://cdn.simpleicons.org/github/CFD6D4" }
];

const TechStackStrip = () => {
    return (
        <section className="bg-[#0B0B0B] border-b border-white/5 py-16 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Platforms We Work & <span className="text-[#0BA57F]">Collaborate With</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        Trusted platforms used to build and scale production systems.
                    </p>
                </motion.div>

                {/* Logo Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    {/* Top Row - 5 logos */}
                    <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-20">
                        {logos.slice(0, 5).map((logo, index) => (
                            <div
                                key={index}
                                className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center select-none ${logo.name === "OpenAI" || logo.name === "AWS"
                                    ? "opacity-70 brightness-200 contrast-50"
                                    : "opacity-90"
                                    }`}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="w-full h-full object-contain"
                                    style={
                                        logo.name === "OpenAI"
                                            ? { transform: 'scale(1.8)' }
                                            : logo.name === "AWS"
                                                ? { transform: 'scale(1.3)' }
                                                : {}
                                    }
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row - 4 logos */}
                    <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-20">
                        {logos.slice(5).map((logo, index) => (
                            <div
                                key={index + 5}
                                className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center select-none ${logo.name === "OpenAI" || logo.name === "AWS"
                                    ? "opacity-70 brightness-200 contrast-50"
                                    : "opacity-90"
                                    }`}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="w-full h-full object-contain"
                                    style={
                                        logo.name === "OpenAI"
                                            ? { transform: 'scale(1.8)' }
                                            : logo.name === "AWS"
                                                ? { transform: 'scale(1.3)' }
                                                : {}
                                    }
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TechStackStrip;
