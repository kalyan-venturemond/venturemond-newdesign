"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ConstructionIcon from "@mui/icons-material/Construction";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const processSteps = [
  { icon: <EmojiObjectsIcon className="animate-float"/>, label: "Idea" },
  { icon: <VerifiedUserIcon className="animate-float"/>, label: "Validation" },
  { icon: <ConstructionIcon className="animate-float" />, label: "MVP" },
  { icon: <TrendingUpIcon className="animate-float" />, label: "Growth" },
];

const StudioHero = () => {
  return (
 <section
  className="relative flex flex-col items-center justify-center text-center min-h-[90vh] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/home/bg1.gif')",
  }}
>
  
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]/95"></div>
   
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-6  z-10"
      >
        <h1 className="heading font-extrabold leading-tight">
          From <span className="text-[#0BA57F]">Idea</span> to{" "}
          <span className="text-[#0BA57F]">Product</span> — We Build Ventures That Scale.
        </h1>
        <p className="text-gray-300 para max-w-3xl mx-auto leading-relaxed">
          Venturemond Studio partners with founders and businesses to research, validate,
          and build technology products that move fast and grow with purpose.
        </p>
      </motion.div>

      
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="relative flex flex-wrap justify-center items-center gap-8 mt-16 md:gap-12"
>
  {/* Line  */}
  <div className="hidden md:block absolute lg:top-8 md:top-6 left-0 w-full h-[2px] bg-[#0BA57F]/30 -translate-y-1/2 z-0 "></div>

  {processSteps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.3, duration: 0.6 }}
      className="relative flex flex-col items-center z-10"
    >
      <div className="w-12 lg:w-16 lg:h-16 h-12 flex items-center justify-center rounded-full border border-[#0BA57F] bg-[#111] text-[#0BA57F] shadow-[0_0_12px_#0BA57F44]">
        {step.icon}
      </div>
      <p className="mt-3 para text-gray-300 font-medium">{step.label}</p>
    </motion.div>
  ))}
</motion.div>


      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row justify-center gap-5 mt-16 z-10"
      >
        <Link
          href="/contact?model=studio&type=partner"
          className="btn1"
        >
          Partner With Studio
        </Link>
        <Link
          href="/contact?model=studio"
          className="btn2"
        >
          Start a Project
        </Link>
      </motion.div>
      
    </section>
  );
};

export default StudioHero;
