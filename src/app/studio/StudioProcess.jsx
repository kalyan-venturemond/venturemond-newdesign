"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import VerifiedIcon from "@mui/icons-material/Verified";
import ConstructionIcon from "@mui/icons-material/Construction";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const steps = [
  {
    icon: <CallIcon className="text-[#0BA57F] text-4xl" />,
    title: "Discovery Call",
    desc: "Understand your idea, goals, and target audience.",
  },
  {
    icon: <VerifiedIcon className="text-[#0BA57F] text-4xl" />,
    title: "Validation Sprint",
    desc: "Test and refine your concept.",
  },
  {
    icon: <ConstructionIcon className="text-[#0BA57F] text-4xl" />,
    title: "Build Sprint",
    desc: "Design and develop the MVP or full-scale product.",
  },
  {
    icon: <RocketLaunchIcon className="text-[#0BA57F] text-4xl" />,
    title: "Launch",
    desc: "Deploy, test, and optimize.",
  },
  {
    icon: <TrendingUpIcon className="text-[#0BA57F] text-4xl" />,
    title: "Scale",
    desc: "Plan next-phase growth and enhancements.",
  },
];

const StudioProcess = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-8 md:py-12 px-6 md:px-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="heading font-bold mb-12"
      >
        A process built for{" "}
        <span className="text-[#0BA57F]">clarity and speed.</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#111] border border-[#0BA57F]/20 rounded-2xl p-6 hover:border-[#0BA57F] transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0BA57F]/10">
                {step.icon}
              </div>
              <h3 className="para font-bold text-[#0BA57F]">
                {step.title}
              </h3>
              <p className="text-gray-400 para leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <Link
          href="/contact?model=studio"
          className="px-8 py-3 bg-[#0BA57F] text-black font-semibold rounded-full hover:bg-[#09c08f] transition duration-300"
        >
          Start a Project
        </Link>
      </motion.div>
    </section>
  );
};

export default StudioProcess;
