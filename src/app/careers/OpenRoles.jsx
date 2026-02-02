"use client";

import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const roles = [
  {
    icon: <WorkOutlineIcon />,
    title: "Full Stack Developer (0–3 years)",
    description:
      "Build scalable web applications using React.js, Node.js, and MongoDB. Collaborate with designers and founders to bring product ideas to life.",
  },
  {
    icon: <BusinessCenterIcon />,
    title: "Business Development Executive (0–3 years)",
    description:
      "Identify partnerships, manage client relationships, and contribute to the growth of Venturemond’s SaaS and venture initiatives.",
  },
];

const OpenRoles = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="heading font-bold mb-4">
            Open <span className="text-[#0BA57F]">Positions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We’re looking for curious minds, self-starters, and team players ready to make an impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 rounded-2xl bg-[#111] border border-[#0BA57F]/20 hover:border-[#0BA57F]/50 hover:shadow-[0_0_25px_#0BA57F22] transition"
            >
              <div className="text-[#0BA57F] text-4xl mb-4">{role.icon}</div>
              <h3 className="para font-bold mb-3">{role.title}</h3>
              <p className="text-gray-300 leading-relaxed para">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenRoles;
