"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ConstructionIcon from "@mui/icons-material/Construction";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const steps = [
  {
    id: 1,
    title: "Understand",
    desc: "Clarify the problem, goals, users, and constraints.",
    icon: <SearchIcon className="text-[#0BA57F] text-3xl" />
  },
  {
    id: 2,
    title: "Plan",
    desc: "Define scope, architecture, timeline, and execution approach.",
    icon: <VerifiedUserIcon className="text-[#0BA57F] text-3xl" />
  },
  {
    id: 3,
    title: "Build",
    desc: "Design and develop using production-grade engineering standards.",
    icon: <ConstructionIcon className="text-[#0BA57F] text-3xl" />
  },
  {
    id: 4,
    title: "Ship",
    desc: "Deploy, test, and release to real users or production environments.",
    icon: <RocketLaunchIcon className="text-[#0BA57F] text-3xl" />
  },
  {
    id: 5,
    title: "Improve",
    desc: "Iterate and optimize based on usage, feedback, and outcomes.",
    icon: <TrendingUpIcon className="text-[#0BA57F] text-3xl" />
  }
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="relative bg-[#0B0B0B] text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="heading font-bold">
            How We <span className="text-[#0BA57F]">Operate?</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            One execution model. Applied to both client systems and our own products.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4 mt-16">

          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[5%] w-[90%] h-[1px] bg-[#0BA57F]/30 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative flex flex-col items-center text-center z-10 w-full md:w-1/5 group"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full border border-[#0BA57F]/50 bg-[#0B0B0B] flex items-center justify-center mb-6 shadow-[0_0_20px_-5px_rgba(11,165,127,0.3)] group-hover:border-[#0BA57F] group-hover:shadow-[0_0_25px_-5px_rgba(11,165,127,0.6)] transition-all duration-300">
                {step.icon}
              </div>

              {/* Step Number */}
              <span className="text-[#0BA57F] text-sm font-semibold tracking-wider uppercase mb-2">
                Step {step.id}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Text & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center space-y-8 pt-8"
        >
          <p className="text-gray-500 text-sm md:text-base italic">
            A simple execution process used across both Services and Studio engagements.
          </p>

          <Link
            href="/contact"
            className="btn1 inline-block"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
