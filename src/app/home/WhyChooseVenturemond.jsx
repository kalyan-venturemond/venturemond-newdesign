"use client";

import { motion } from "framer-motion";
import HubIcon from "@mui/icons-material/Hub";
import SpeedIcon from "@mui/icons-material/Speed";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ConstructionIcon from "@mui/icons-material/Construction";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const advantages = [
  {
    icon: <HubIcon className="text-[#0BA57F]" />,
    title: "Dual Execution Model",
    desc: "We operate as both a venture studio and a SaaS builder — delivering for clients while shipping our own products using the same standards.",
  },
  {
    icon: <PsychologyIcon className="text-[#0BA57F]" />,
    title: "Founder-Led Thinking",
    desc: "Every decision is driven by outcome, ownership, and long-term value — not ticket-based delivery.",
  },
  {
    icon: <ConstructionIcon className="text-[#0BA57F]" />,
    title: "Production-First Engineering",
    desc: "Whether client systems or internal SaaS, we build for real users, real load, and real scale from day one.",
  },
  {
    icon: <VerifiedUserIcon className="text-[#0BA57F]" />,
    title: "End-to-End Ownership",
    desc: "From problem discovery to launch and scale, we own the full lifecycle — strategy, design, build, and execution.",
  },
  {
    icon: <SpeedIcon className="text-[#0BA57F]" />,
    title: "Speed With Discipline",
    desc: "We move fast without shortcuts, using proven processes refined across studio projects and SaaS platforms.",
  },
];

const WhyChooseVenturemond = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="heading font-bold flex justify-center items-center md:gap-2 gap-1">
            <span>⚡Why Founders Choose <span className="text-[#0BA57F]">Venturemond</span></span>
          </h2>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="overflow-hidden rounded-2xl border border-gray-800 bg-[#111]"
        >
          <div className="grid grid-cols-2  bg-[#0BA57F]/10 text-sm md:text-base font-semibold text-[#0BA57F] border-b border-gray-800">
            <div className="px-6 py-4 border-r border-gray-800">Advantage</div>
            <div className="px-6 py-4">What It Means</div>
          </div>

          {advantages.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-b border-gray-800 last:border-none hover:bg-[#0BA57F]/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 px-6 md:py-5 py-2 border-r border-gray-800">
                <div className="text-xl">{item.icon}</div>
                <p className="para">{item.title}</p>
              </div>
              <div className="px-6 md:py-5 py-3 para text-gray-300">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseVenturemond;
