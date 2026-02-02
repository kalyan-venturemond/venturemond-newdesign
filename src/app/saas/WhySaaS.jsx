"use client";

import { motion } from "framer-motion";
import MemoryIcon from "@mui/icons-material/Memory";
import LockIcon from "@mui/icons-material/Lock";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PaletteIcon from "@mui/icons-material/Palette";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";

const differentiators = [
  {
    icon: <MemoryIcon className="text-[#0BA57F]" />,
    title: "Intelligent Architecture",
    description:
      "Every system is designed for automation, analytics, and adaptability.",
  },
  {
    icon: <LockIcon className="text-[#0BA57F]" />,
    title: "Privacy by Design",
    description: "Your data stays secure — always.",
  },
  {
    icon: <CloudQueueIcon className="text-[#0BA57F]" />,
    title: "Cloud-Native Scalability",
    description: "Optimized for global performance and uptime.",
  },
  {
    icon: <PaletteIcon className="text-[#0BA57F]" />,
    title: "Experience-Led Design",
    description: "Modern, minimal, and intuitive interfaces.",
  },
  {
    icon: <SettingsEthernetIcon className="text-[#0BA57F]" />,
    title: "Seamless Integrations",
    description: "Works with the tools your business already uses.",
  },
];

const WhySaaS = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-12 px-6 md:px-16 relative">
    
      <div className="max-w-6xl mx-auto space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="heading font-bold">
            Why <span className="text-[#0BA57F]">Venturemond SaaS</span>?
          </h2>
          <p className="text-gray-300 para max-w-2xl mx-auto">
            Our products stand apart through design, performance, and privacy — engineered
            for reliability and growth.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse rounded-2xl overflow-hidden">
            <thead className="bg-[#111111] text-[#0BA57F] text-left uppercase tracking-wide border-b border-[#0BA57F]/20">
              <tr>
                <th className="px-6 py-4 font-semibold text-sm md:text-base">
                  Edge
                </th>
                <th className="px-6 py-4 font-semibold text-sm md:text-base">
                  Description
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800 bg-[#0F0F0F]">
              {differentiators.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-[#0BA57F]/5 transition-all"
                >
                  <td className="px-6 py-5 para font-semibold text-white flex items-center gap-3 whitespace-nowrap">
                    {item.icon}
                    {item.title}
                  </td>
                  <td className="px-6 py-5 para text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySaaS;
