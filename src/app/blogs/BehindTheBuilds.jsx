"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Code, LineChart, ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";

const iconMap = {
  Build: Wrench,
  Code: Code,
  Timeline: LineChart,
};

const BehindTheBuilds = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16" id="insights">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-16"
      >

        <div className="text-center space-y-4">
          <h2 className="heading font-extrabold">
            Product <span className="text-[#0BA57F]">Insights.</span>
          </h2>
          <p className="text-gray-300 para max-w-2xl mx-auto">
            Engineering, design, and strategy notes.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {insights.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Wrench;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111111] border border-white/5 p-8 rounded-2xl hover:border-[#0BA57F]/40 transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/5 rounded-lg text-[#0BA57F]">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-[#0BA57F] border border-[#0BA57F] px-3 py-1 rounded-full uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#0BA57F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="inline-flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#0BA57F] transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

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

export default BehindTheBuilds;
