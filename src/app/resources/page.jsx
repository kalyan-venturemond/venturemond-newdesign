"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "./blogData";

const ResourcesPage = () => {
    return (
        <div className="bg-[#0B0B0B] min-h-screen">
            {/* Hero Section */}
            <section
                className="relative flex flex-col items-center justify-center min-h-[50vh] bg-[#0B0B0B] text-white overflow-hidden px-6 md:px-16 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/home/bg4.gif')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]/95" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Resources & <span className="text-[#0BA57F]">Insights</span>
                    </h1>

                    <p className="text-gray-300 text-sm md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                        Real-world insights, case studies, and thought leadership from our team.
                    </p>
                </motion.div>
            </section>

            {/* Blogs Section */}
            <section className="py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Latest <span className="text-[#0BA57F]">Blogs</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Insights from the field — real projects, real challenges, real solutions.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/resources/blogs/${blog.slug}`}>
                                <div className="group bg-[#1A1A1A] rounded-lg overflow-hidden border border-gray-800 hover:border-[#0BA57F] transition-all duration-300 h-full flex flex-col">
                                    {/* Blog Image */}
                                    <div className="relative h-48 bg-gray-800 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0BA57F]/20 to-transparent group-hover:from-[#0BA57F]/30 transition-all duration-300" />
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Blog Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Category & Read Time */}
                                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                                            <span className="px-3 py-1 bg-[#0BA57F]/10 text-[#0BA57F] rounded-full">
                                                {blog.category}
                                            </span>
                                            <span>{blog.readTime}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0BA57F] transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                                            {blog.excerpt}
                                        </p>

                                        {/* Author & Date */}
                                        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-800">
                                            <span>{blog.author}</span>
                                            <span>{blog.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ResourcesPage;
