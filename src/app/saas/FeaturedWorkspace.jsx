"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import StorageIcon from "@mui/icons-material/Storage";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const features = [
  { icon: <LockIcon className="text-[#0BA57F]" />, text: "Secure document and file collaboration" },
  { icon: <SmartToyIcon className="text-[#0BA57F]" />, text: "AI-assisted productivity tools" },
  { icon: <SettingsEthernetIcon className="text-[#0BA57F]" />, text: "Workflow automation" },
  { icon: <ManageAccountsIcon className="text-[#0BA57F]" />, text: "Role-based user controls" },
  { icon: <StorageIcon className="text-[#0BA57F]" />, text: "Private cloud deployment" },
  { icon: <IntegrationInstructionsIcon className="text-[#0BA57F]" />, text: "Integration-ready APIs" },
];

const FeaturedWorkspace = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white py-12 px-6 md:px-16 overflow-hidden">
    
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" space-y-6 w-[100%]"
        >
          <h2 className="heading font-bold leading-snug text-center">
            <span className="text-[#0BA57F]">Private.</span>{" "}
            <span className="text-[#0BA57F]">Smart.</span> Seamless.
          </h2>

          <p className="text-gray-300 para text-center leading-relaxed ">
            Venturemond Workspace is a unified, intelligent workspace designed for teams
            that value privacy and performance. It brings collaboration, storage, and
            automation into one secure environment — built for modern businesses.
          </p>

          
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-400 para mt-6">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-[#111]/60 border border-[#0BA57F]/20 rounded-xl p-3 hover:border-[#0BA57F]/50 transition-all duration-300"
              >
                {feature.icon}
                <span>{feature.text}</span>
              </motion.li>
            ))}
          </ul>

         
          <div className="flex flex-col text-center justify-center sm:flex-row gap-5 mt-10">
            <Link
              href="/workspace-waitlist"
              className="btn1"
            >
              Join Waitlist
            </Link>
            <Link
              href="https://workplace.venturemond.com/"
              className="btn2"
            >
              Request Early Access
            </Link>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default FeaturedWorkspace;
