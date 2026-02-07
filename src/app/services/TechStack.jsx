"use client";

import { motion } from "framer-motion";
import {
    Workflow,
    Bot,
    Database,
    LayoutTemplate,
    Server,
    Globe,
    Cpu,
    Code2
} from "lucide-react";

// Tech Stack Data
const techStack = [
    {
        category: "AI Automation",
        description: "Building intelligent agents and autonomous workflows.",
        tools: [
            { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/FF6B6B" },
            { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain/0BA57F" },
            { name: "OpenAI", logo: "/tech/openai.png" },
            { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" }
        ]
    },
    {
        category: "Internal Tools & Dashboards",
        description: "Rapidly developed admin panels and operational tools.",
        tools: [
            { name: "Retool", logo: "https://cdn.simpleicons.org/retool/3D68FF" },
            { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
            { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3ECF8E" },
            { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/336791" }
        ]
    },
    {
        category: "Production Systems",
        description: "Scalable, secure, and production-ready architecture.",
        tools: [
            { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/8CC84B" },
            { name: "AWS", logo: "/tech/aws.svg" },
            { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/white" }
        ]
    }
];

const TechStack = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16" id="tech-stack">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="heading font-extrabold mb-4">
                        Our <span className="text-[#0BA57F]">Tech Stack</span>
                    </h2>
                    <p className="text-gray-300 para max-w-2xl mx-auto">
                        We choose the right tools for the job — prioritizing speed, scalability, and maintainability.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {techStack.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#111111] border border-[#0BA57F]/10 rounded-2xl p-8 hover:border-[#0BA57F]/30 transition-all duration-300 flex flex-col"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{category.category}</h3>
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
                                {category.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {category.tools.map((tool, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                                        <div className="relative w-6 h-6 shrink-0">
                                            {/* Fallback to text if image fails to load (handled via alt) - but CDN is reliable */}
                                            <img
                                                src={tool.logo}
                                                alt={tool.name}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-200">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
