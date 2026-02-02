"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import BoltIcon from "@mui/icons-material/Bolt";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const features = [
  {
    icon: <CloudQueueIcon className="text-[#0BA57F] text-4xl" />,
    title: "Secure cloud collaboration",
  },
  {
    icon: <WorkspacesIcon className="text-[#0BA57F] text-4xl" />,
    title: "Integrated productivity tools",
  },
  {
    icon: <BoltIcon className="text-[#0BA57F] text-4xl" />,
    title: "Workflow automation",
  },
  {
    icon: <LockPersonIcon className="text-[#0BA57F] text-4xl" />,
    title: "Role-based access control",
  },
  {
    icon: <IntegrationInstructionsIcon className="text-[#0BA57F] text-4xl" />,
    title: "API & integration ready",
  },
];

const FeaturedProduct = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white lg:py-16 md:py-10 py-5 px-6 md:px-16 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#0BA57F]/10 via-transparent to-transparent -z-10" />

      <div className="max-w-6xl mx-auto text-center space-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading font-bold mb-4">
            Private. Smart. <span className="text-[#0BA57F]">Seamless.</span>
          </h2>
          <p className="text-gray-300 para max-w-3xl mx-auto leading-relaxed">
            Venturemond Workspace is a private, intelligent workspace for teams that value
            privacy, performance, and productivity.  
            It combines collaboration, automation, and secure cloud infrastructure into a single modern platform.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 place-items-center"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-gray-800 rounded-2xl xl:p-6 lg:p-5 p-4 flex flex-col items-center justify-center hover:border-[#0BA57F] transition-all duration-300 w-full max-w-[360px] md:h-[200px] h-[100px]"
            >
              <div className="mb-4">{feature.icon}</div>
              <p className="text-gray-300 para md:text-base font-medium text-center">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Link
            href="/workspace-waitlist"
            className="btn1"
          >
            Join Waitlist
          </Link>
          <Link
            href="/contact?model=saas&service=workspace"
            className="btn2"
          >
            Request Access
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
