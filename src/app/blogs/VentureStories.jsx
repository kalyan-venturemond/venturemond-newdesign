"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Truck, School, Landmark, ArrowRight } from "lucide-react";
import { realBuilds } from "@/data/insights";

const iconMap = {
  Truck: Truck,
  School: School,
  Landmark: Landmark
};

const VentureStories = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16" id="stories">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="heading font-extrabold">
            Real Builds. <span className="text-[#0BA57F]">Real Results.</span>
          </h2>
          <p className="text-gray-300 para max-w-2xl mx-auto">
            Startups, founders, and companies we’ve helped turn ideas into
            growth stories.
          </p>
        </div>

        {/* Stories List */}
        <div className="mt-16 border-t border-white/10">
          {realBuilds.map((story, index) => {
            const IconComponent = iconMap[story.icon] || Truck;
            return (
              <motion.div
                key={story.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-white/10 py-12 grid md:grid-cols-2 gap-10 items-start"
              >
                {/* Left: Icon + Title */}
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 p-3 bg-[#111] border border-white/10 rounded-xl text-[#0BA57F]">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-[#0BA57F] transition-colors">
                    {story.title}
                  </h3>
                </div>

                {/* Right: Description + Link */}
                <div className="space-y-8">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {story.desc}
                  </p>
                  <Link
                    href={`/blogs/${story.slug}`}
                    className="inline-flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#0BA57F] transition-colors"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="#"
            className="text-[#0BA57F] hover:text-[#09c08f] font-medium tracking-wide transition text-sm"
          >
            [View More →]
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default VentureStories;
