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
    title: "Discover",
    desc: "Understand your goals and challenges.",
    icon: <SearchIcon className="text-[#0BA57F] text-4xl animate-float drop-shadow-[0_0_6px_#0BA57F66]" />,
  },
  {
    id: 2,
    title: "Validate",
    desc: "Confirm opportunity and market fit.",
    icon: <VerifiedUserIcon className="text-[#0BA57F] text-4xl animate-float drop-shadow-[0_0_6px_#0BA57F66]" />,
  },
  {
    id: 3,
    title: "Build",
    desc: "Design and develop the product.",
    icon: <ConstructionIcon className="text-[#0BA57F] text-4xl animate-float drop-shadow-[0_0_6px_#0BA57F66]" />,
  },
  {
    id: 4,
    title: "Launch",
    desc: "Execute your go-to-market plan.",
    icon: <RocketLaunchIcon className="text-[#0BA57F] text-4xl animate-float drop-shadow-[0_0_6px_#0BA57F66]" />,
  },
  {
    id: 5,
    title: "Scale",
    desc: "Optimize, iterate, and grow.",
    icon: <TrendingUpIcon className="text-[#0BA57F] text-4xl animate-float drop-shadow-[0_0_6px_#0BA57F66]" />,
  },
];

const HowWeWork = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white py-16 px-6 md:px-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0BA57F]/10 via-transparent to-transparent -z-10" />

      <div className="max-w-6xl mx-auto text-center space-y-14">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading font-bold mb-4">
            A simple, structured approach to{" "}
            <span className="text-[#0BA57F]">building success.</span>
          </h2>
        </motion.div>

        
<div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 mt-10">
  {/* Line  */}
  <div className="hidden md:block absolute top-[32px] left-[6.7%] w-[88%] h-[2px] bg-[#0BA57F]/25 z-0"></div>

  {steps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      className="relative flex flex-col items-center text-center md:w-auto z-10 px-2"
    >
     
      <div className="flex items-center justify-center w-16 h-16 bg-[#111] border border-[#0BA57F]/50 rounded-full mb-4 shadow-[0_0_15px_#0BA57F33] relative z-10">
        {step.icon}
      </div>

      
      <p className="text-[#0BA57F] font-semibold text-sm mb-1">
        Step {step.id}
      </p>

     
      <h3 className="xl:text-xl lg:text-lg font-semibold">{step.title}</h3>

     
      <p className="text-gray-400 lg:text-sm text-[12px] mt-2 max-w-[200px] mx-auto leading-relaxed">
        {step.desc}
      </p>
    </motion.div>
  ))}
</div>


        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 lg:mt-16 "
        >
          <Link
            href="/contact"
            className="btn1"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
