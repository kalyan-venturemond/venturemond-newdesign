"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogs } from "../../blogData";

const BlogPostPage = () => {
    const params = useParams();
    const blog = blogs.find(b => b.slug === params.slug);

    if (!blog) {
        return (
            <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
                    <Link href="/resources" className="text-[#0BA57F] hover:underline">
                        ← Back to Resources
                    </Link>
                </div>
            </div>
        );
    }

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = blog.title;

    return (
        <div className="min-h-screen bg-[#0B0B0B]">
            {/* Header Navigation */}
            <div className="bg-black/50 border-b border-gray-800 py-4 px-6 md:px-16">
                <Link href="/resources" className="inline-flex items-center text-gray-400 hover:text-[#0BA57F] transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Resources
                </Link>
            </div>

            {/* Hero Section - Split Layout */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Title, Intro, Date */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Category Badge */}
                        <span className="inline-block px-4 py-1.5 bg-[#0BA57F]/10 text-[#0BA57F] rounded-full font-medium text-sm mb-4">
                            {blog.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                            {blog.title}
                        </h1>

                        {/* Excerpt/Summary */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {blog.excerpt}
                        </p>

                        {/* Publish Date & Read Time */}
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{blog.date}</span>
                            <span>•</span>
                            <span>{blog.readTime}</span>
                        </div>
                    </motion.div>

                    {/* Right: Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] bg-gradient-to-br from-[#0BA57F]/20 to-gray-900 rounded-xl overflow-hidden border border-gray-800"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-black/50 px-3 py-1 rounded">
                            Featured Image
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Author Section */}
            <section className="max-w-4xl mx-auto px-6 md:px-16 py-8 border-y border-gray-800">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-4"
                >
                    {/* Author Photo */}
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#0BA57F]">
                        <img
                            src="/kavyanth1.png"
                            alt="Kavyanth"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Author Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg">Kavyanth</h3>
                        <p className="text-gray-400 text-sm">Founder, Venturemond</p>
                    </div>
                </motion.div>
            </section>

            {/* Main Content Section */}
            <article className="max-w-4xl mx-auto px-6 md:px-16 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </article>

            {/* Share Section */}
            <section className="max-w-4xl mx-auto px-6 md:px-16 py-8 border-t border-gray-800">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-white font-semibold text-lg mb-4">Share this article</h3>
                    <div className="flex items-center gap-4">
                        {/* LinkedIn Share */}
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>

                        {/* X (Twitter) Share */}
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors border border-gray-700"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            X
                        </a>

                        {/* Facebook Share */}
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 md:px-16 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-br from-[#0BA57F]/10 to-transparent border border-[#0BA57F]/30 rounded-xl p-8 md:p-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Operations?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss how AI and automation can solve your specific challenges and drive measurable results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#0BA57F] text-white font-semibold rounded-lg hover:bg-[#099970] transition-colors text-lg"
                        >
                            Schedule a Call
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-transparent border-2 border-[#0BA57F] text-[#0BA57F] font-semibold rounded-lg hover:bg-[#0BA57F]/10 transition-colors text-lg"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Custom Styles for Blog Content */}
            <style jsx global>{`
                .prose {
                    color: #d1d5db;
                    line-height: 1.8;
                }
                .prose h2 {
                    color: #ffffff;
                    font-size: 1.875rem;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1.25rem;
                }
                .prose h3 {
                    color: #ffffff;
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }
                .prose p {
                    margin-bottom: 1.5rem;
                    color: #d1d5db;
                }
                .prose ul, .prose ol {
                    margin-top: 1rem;
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }
                .prose li {
                    margin-bottom: 0.75rem;
                    color: #d1d5db;
                }
                .prose strong {
                    color: #0BA57F;
                    font-weight: 600;
                }
                .prose a {
                    color: #0BA57F;
                    text-decoration: underline;
                }
                .prose a:hover {
                    color: #099970;
                }
            `}</style>
        </div>
    );
};

export default BlogPostPage;
