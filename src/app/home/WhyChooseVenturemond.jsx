"use client";

import { motion } from "framer-motion";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HubIcon from "@mui/icons-material/Hub";
import SpeedIcon from "@mui/icons-material/Speed";
import PsychologyIcon from "@mui/icons-material/Psychology";

const advantages = [
  {
    icon: <RocketLaunchIcon className="text-[#0BA57F]" />,
    title: "Full-Stack Execution",
    desc: "From strategy to development — everything in-house.",
  },
  {
    icon: <PsychologyIcon className="text-[#0BA57F]" />,
    title: "Founder-Led Thinking",
    desc: "We think like co-builders, not vendors.",
  },
  {
    icon: <HubIcon className="text-[#0BA57F]" />,
    title: "Outcome Focused",
    desc: "Each project ties to measurable results.",
  },
  {
    icon: <EmojiObjectsIcon className="text-[#0BA57F]" />,
    title: "Scalable Systems",
    desc: "We build for long-term growth.",
  },
  {
    icon: <SpeedIcon className="text-[#0BA57F]" />,
    title: "Speed + Precision",
    desc: "Rapid execution without compromise.",
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
