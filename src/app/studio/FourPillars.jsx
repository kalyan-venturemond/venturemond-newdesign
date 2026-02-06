"use client";

import { motion } from "framer-motion";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CodeIcon from "@mui/icons-material/Code";
import TimelineIcon from "@mui/icons-material/Timeline";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const pillars = [
  {
    icon: <LightbulbIcon className="text-[#0BA57F] text-5xl animate-float" />,
    title: "Research & Validation",
    desc: "Before a single line of code, we validate your idea, market, and user fit — so every decision is grounded in insight.",
    includes: [
      "Market research & opportunity mapping",
      "Problem–solution fit analysis",
      "Competitive positioning",
      "User persona & early feedback testing",
    ],
  },
  {
    icon: <CodeIcon className="text-[#0BA57F] text-5xl animate-float" />,
    title: "MVP & Product Development",
    desc: "From concept to code — we build clean, scalable, and high-performance products that move from prototype to production fast.",
    includes: [
      "Web & Cloud Platforms",
      "Mobile apps (React Native / Flutter)",
      "Product UI/UX design",
      "Full-stack engineering (Next.js, Node.js, Python, Firebase, MongoDB, AWS)",
    ],
  },
  {
    icon: <TimelineIcon className="text-[#0BA57F] text-5xl animate-float" />,
    title: "Product Roadmaps & Tech Strategy",
    desc: "We help you think long-term — mapping your product milestones, system architecture, and execution sprints for sustained growth.",
    includes: [
      "12–18 month product roadmap",
      "Architecture & scalability planning",
      "Feature prioritization & release strategy",
      "Progress tracking (OKRs & KPIs)",
    ],
  },
  {
    icon: (
      <RocketLaunchIcon className="text-[#0BA57F] text-5xl animate-float" />
    ),
    title: "Growth & Go-To-Market (GTM)",
    desc: "We don’t just launch — we help your product gain traction. Our GTM frameworks are designed to build awareness, adoption, and user engagement from day one.",
    includes: [
      "GTM planning & launch roadmap",
      "Funnel design (acquisition → retention)",
      "Community & partnership building",
      "Performance tracking & optimization",
    ],
  },
];

const FourPillars = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white md:py-14 py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading font-bold"
        >
          Four pillars. One mission —{" "}
          <span className="text-[#0BA57F]">to execute with impact.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative bg-[#111] border border-gray-800 rounded-3xl p-8 text-left hover:border-[#0BA57F] transition-all duration-300 shadow-[0_0_20px_#0BA57F22]"
            >
              <div className="mb-6">{pillar.icon}</div>

              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#0BA57F] mb-4">
                {pillar.title}
              </h3>

              <p className="text-gray-300 para leading-relaxed mb-5">
                {pillar.desc}
              </p>

              <ul className="text-gray-400 para space-y-2 list-disc list-inside">
                {pillar.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
