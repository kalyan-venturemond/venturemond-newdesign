"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import InsightsIcon from "@mui/icons-material/Insights";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { LightbulbIcon } from "lucide-react";

const floatingIcons = [
  {
    icon: <LightbulbIcon className="text-[#0BA57F] text-5xl animate-float" />,
    delay: 0,
  },
  {
    icon: <AutoAwesomeIcon
     className="text-[#0BA57F] text-5xl animate-float" />,
    delay: 0.2,
  },
  {
    icon: <InsightsIcon className="text-[#0BA57F] text-5xl animate-float" />,
    delay: 0.3,
  },
];

const Hero = () => {
  return (
   <section
  className="relative  min-h-[80vh] bg-[#0B0B0B] text-white overflow-hidden "
  style={{
    backgroundImage: "url('/home/bg4.gif')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]/95 px-6 md:px-16 pt-10 flex flex-col items-center justify-center text-center">

      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="heading font-extrabold leading-tight max-w-4xl mx-auto"
      >
       Insights. <span className="text-[#0BA57F]">Stories.</span> Execution.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 para mt-6 max-w-3xl mx-auto leading-relaxed"
      >
         Explore how we build ventures, products, and systems that move ideas from{" "}
        <span className="text-[#0BA57F] font-semibold">0 to 1</span> — and beyond.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center gap-8 mt-12"
      >
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              delay: item.delay,
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col sm:flex-row justify-center gap-5 mt-14"
      >
        <Link href="#articles" className="btn1">
         Read Articles
        </Link>
       
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
