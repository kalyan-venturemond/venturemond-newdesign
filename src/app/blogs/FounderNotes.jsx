"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { articles } from "@/data/articles";
import { ArrowUpRight } from "lucide-react";

const FounderNotes = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16" id="articles">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-16"
      >

        <div className="text-center space-y-4">
          <h2 className="heading font-extrabold">
            Thoughts from the <span className="text-[#0BA57F]">Desk.</span>
          </h2>
          <p className="text-gray-300 para max-w-2xl mx-auto">
            Perspectives on building, scaling, and leading in a fast-changing world.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111111] border border-[#0BA57F]/20 p-8 rounded-2xl hover:border-[#0BA57F]/50 transition-all duration-300 group flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold tracking-wider text-[#0BA57F] border border-[#0BA57F] px-3 py-1 rounded-full uppercase">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                    <span>🗓 {article.date}</span>
                    <span>⏱ {article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#0BA57F] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {article.description}
                </p>
              </div>

              <div>
                <Link
                  href={`/blogs/${article.slug}`}
                  className="inline-flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#0BA57F] transition-colors"
                >
                  Read Article
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="text-center mt-12">
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

export default FounderNotes;
