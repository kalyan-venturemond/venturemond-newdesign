"use client";

import { ventures } from "@/data/ventures";
import { realBuilds } from "@/data/insights"; // Assuming realBuilds are also portfolio items
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { motion } from "framer-motion";

export default function PortfolioItemPage({ params }) {
    const { slug } = use(params);

    const venture = ventures.find((v) => v.slug === slug) || realBuilds.find((rb) => rb.slug === slug);

    if (!venture) {
        notFound();
    }

    // --- VENTURE CASE STUDY LAYOUT ---
    return (
        <article className="bg-[#0B0B0B] text-white pt-24 pb-24">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                {/* Back Link */}
                <Link
                    href="/portfolio"
                    className="inline-flex items-center text-xs text-gray-500 hover:text-white transition-colors mb-16 tracking-wide"
                >
                    ← Back to Portfolio
                </Link>

                {/* Header - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center space-y-6 mb-24"
                >
                    {/* Logo - Only Render if Present */}
                    {venture.logo && (
                        <div className="w-16 h-16 bg-white flex items-center justify-center p-2 rounded-lg mb-2">
                            <Image
                                src={venture.logo}
                                alt={venture.title}
                                width={64}
                                height={64}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    )}

                    <span className="text-[10px] font-bold tracking-widest text-[#0BA57F] bg-[#0BA57F]/10 px-3 py-1 rounded-full border border-[#0BA57F]/20 uppercase">
                        {venture.division}
                    </span>

                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            {venture.title}
                        </h1>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            {venture.description}
                        </p>
                    </div>
                </motion.div>

                {/* Project Overview - Split Layout */}
                <section className="grid md:grid-cols-[200px_1fr] gap-10 mb-24 items-start">
                    <h2 className="text-lg font-bold text-white sticky top-24">Project Overview</h2>
                    <div className="space-y-6 text-gray-400 leading-relaxed text-base">
                        {venture.overview.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                {/* What We Built (Highlights) - Center Title + 2x2 Grid */}
                <section className="mb-24">
                    <h2 className="text-xl font-bold text-white text-center mb-12">What We Built</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {venture.highlights.map((item, idx) => (
                            <div key={idx} className="bg-[#111111] p-8 rounded-lg border border-white/5 hover:border-[#0BA57F]/20 transition-colors">
                                <h3 className="text-white font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Approach - Split Layout */}
                <section className="grid md:grid-cols-[200px_1fr] gap-10 mb-24 items-start">
                    <h2 className="text-lg font-bold text-white sticky top-24">Our Approach</h2>
                    <div className="bg-[#111111] p-8 rounded-xl border border-white/5">
                        <p className="text-gray-400 leading-relaxed text-base">
                            {venture.approach}
                        </p>
                    </div>
                </section>

                {/* Outcome - Centered */}
                <section className="max-w-3xl mx-auto text-center mb-32 space-y-8">
                    <h2 className="text-xl font-bold text-white">Outcome</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        {venture.outcome}
                    </p>
                </section>

                {/* Footer CTA */}
                <section className="text-center space-y-8 border-t border-white/5 pt-24">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Your story could be <span className="text-[#0BA57F]">next.</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        We build ventures worth sharing — products that inspire, scale, and last. Partner with us to create something that makes it to this page.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link
                            href="/contact"
                            className="bg-[#0BA57F] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#09c08f] transition text-sm"
                        >
                            Partner With Venturemond
                        </Link>
                        <Link
                            href="/contact?type=project"
                            className="border border-[#333] text-white font-semibold px-6 py-3 rounded-full hover:bg-white/5 transition text-sm"
                        >
                            Start a Project
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    );
}
