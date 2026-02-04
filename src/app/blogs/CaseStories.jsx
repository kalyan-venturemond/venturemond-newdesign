"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ventures } from "@/data/ventures";

const CaseStories = () => {
  const [showAll, setShowAll] = useState(false);

  // Show 4 initially, or all if button clicked
  const displayedVentures = showAll ? ventures : ventures.slice(0, 4);

  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16" id="ventures">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="heading font-extrabold">
            Ventures <span className="text-[#0BA57F]">We’ve Built</span>
          </h2>
          <p className="text-gray-300 para max-w-2xl mx-auto">
            A glimpse into some of the projects and ideas we’ve executed through{" "}
            <span className="text-[#0BA57F]">Venturemond Studio</span> and{" "}
            <span className="text-[#0BA57F]">SaaS</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
          {displayedVentures.map((venture, index) => (
            <motion.div
              key={venture.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111111] border border-[#0BA57F]/20 p-8 rounded-2xl hover:border-[#0BA57F]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 1. Badge Top-Left */}
                <div className="flex justify-start mb-6">
                  <span className="text-xs font-bold tracking-wider text-[#0BA57F] bg-[#0BA57F]/10 px-3 py-1 rounded-full border border-[#0BA57F]/20 uppercase">
                    {venture.division}
                  </span>
                </div>

                {/* 2. Logo + Title Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 shrink-0 overflow-hidden">
                    <Image
                      src={venture.logo}
                      alt={venture.title}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#0BA57F] transition-colors leading-tight">
                    {venture.title}
                  </h3>
                </div>

                {/* 3. Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {venture.description}
                </p>
              </div>

              <div>
                <Link
                  href={`/blogs/${venture.slug}`}
                  className="inline-flex items-center text-[#0BA57F] font-medium text-sm hover:underline underline-offset-4"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="text-[#0BA57F] hover:text-[#09c08f] font-medium transition"
            >
              [View More →]
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="text-gray-500 hover:text-white font-medium transition"
            >
              [Show Less]
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStories;
