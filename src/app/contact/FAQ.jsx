"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const faqData = [
    {
        question: "What services does Venturemond offer?",
        answer: "Venturemond builds AI-powered software, automation, ERPs, CRMs, MVPs, and scalable platforms for businesses and founders."
    },
    {
        question: "Do you work with early-stage startups?",
        answer: "Yes. We work with early-stage and growth-stage startups focused on execution and long-term product building."
    },
    {
        question: "What is the Venturemond Studio model?",
        answer: "It’s a co-building approach where we help founders design, build, and launch products, with the option for deeper collaboration."
    },
    {
        question: "How long does a typical project take?",
        answer: "Most projects take between 4–12 weeks, depending on scope and complexity."
    },
    {
        question: "How do we get started?",
        answer: "Fill out the contact form above, and our team will reach out to discuss next steps."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mt-24"
        >
            <h2 className="heading text-center font-bold mb-10 text-white">
                Frequently Asked <span className="text-[#0BA57F]">Questions</span>
            </h2>

            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="bg-[#111111] border border-[#0BA57F]/20 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none"
                        >
                            <span className="text-lg md:text-xl font-semibold text-gray-200">{item.question}</span>
                            {openIndex === index ? (
                                <KeyboardArrowUpIcon className="text-[#0BA57F]" />
                            ) : (
                                <KeyboardArrowDownIcon className="text-gray-400" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-4 md:p-6 pt-0 text-gray-400 para leading-relaxed border-t border-[#0BA57F]/10">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default FAQ;
