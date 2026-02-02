"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Image from "next/image";

const steps = [
  {
    title: "Discovery & Problem Definition",
    description: "Identify pain points worth solving through research and insight.",
    icon: <PrecisionManufacturingIcon className="text-[#0BA57F] text-3xl" />,
  },
  {
    title: "Product Architecture",
    description:
      "Design scalable systems and user-first experiences that stand the test of growth.",
    icon: <ArchitectureIcon className="text-[#0BA57F] text-3xl" />,
  },
  {
    title: "Development & Integration",
    description:
      "Build fast, test early, and refine continuously — ensuring high-performance delivery.",
    icon: <IntegrationInstructionsIcon className="text-[#0BA57F] text-3xl" />,
  },
  {
    title: "Launch & Iterate",
    description:
      "Deploy, monitor, and evolve using feedback for constant product improvement.",
    icon: <RocketLaunchIcon className="text-[#0BA57F] text-3xl" />,
  },
];

const techStack = [
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "Node.js", src: "/tech/nodejs.svg" },
  { name: "Python", src: "/tech/python.svg" },
  { name: "MongoDB", src: "/tech/mongodb.svg" },
  { name: "Firebase", src: "/tech/firebase.svg" },
  { name: "AWS", src: "/tech/aws.svg" },
  { name: "LangChain", src: "/tech/langchain.svg" },
];

const HowWeBuild = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-12 px-6 md:px-10 relative">
      
     
      <div className="max-w-7xl mx-auto text-center space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h2 className="heading font-bold">
            From concept to product —{" "}
            <span className="text-[#0BA57F]">fast, focused, and reliable.</span>
          </h2>
          <p className="text-gray-300 para mx-auto leading-relaxed text-lg">
            Our SaaS engineering process is built around clarity, speed, and adaptability.
          </p>
        </motion.div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-[#111111]/80 border border-[#0BA57F]/20 rounded-2xl p-6 text-left hover:border-[#0BA57F]/50 hover:shadow-[0_0_20px_#0BA57F22] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#0BA57F] text-2xl font-semibold">
                  {index + 1}.
                </span>
                {step.icon}
              </div>
              <h3 className="para font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400 para leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20"
        >
          <h4 className="text-lg font-semibold text-[#0BA57F] mb-6 tracking-wide uppercase">
            Tech Stack
          </h4>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#111]/70 border border-[#0BA57F]/20 rounded-xl group-hover:border-[#0BA57F]/60 group-hover:shadow-[0_0_15px_#0BA57F33] transition-all duration-300">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-gray-400 text-xs md:text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <Link
            href="/contact?model=saas&type=partner"
            className="btn1"
          >
            Partner With SaaS Division
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeBuild;
