"use client";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative bg-[#0B0B0B] text-white lg:py-16 md:py-10 py-5 px-6 md:px-16 overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-b from-[#0BA57F]/10 via-transparent to-transparent -z-10" />

      <div className="max-w-6xl mx-auto text-center space-y-12">
       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading font-bold mb-6">
            We don’t just build.{" "}
            <span className="text-[#0BA57F]">We execute.</span>
          </h2>

          <p className="text-gray-300 para leading-relaxed max-w-3xl mx-auto mb-4">
            Venturemond is a full-stack venture company helping founders and organizations
            turn vision into measurable outcomes.
          </p>

          <p className="text-gray-400 para max-w-3xl mx-auto">
            We operate through two core divisions that power our innovation:
          </p>
          <br />
           <p className='para mb-2'>
              <span className="text-[#0BA57F] font-semibold">Studio — </span>
              Our venture-building arm that helps startups go from idea to product and scale.
            </p>
            <p className='para'>
              <span className="text-[#0BA57F] font-semibold">SaaS — </span>
              Our product division creating intelligent, privacy-first tools for modern teams.
            </p>
        </motion.div>

        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Venturemond Studio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-gray-800 rounded-3xl p-5 md:p-7 lg:p-10 text-left hover:border-[#0BA57F] transition-all duration-300 "
          >
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#0BA57F] mb-4">
             <RocketLaunchIcon className='animate-float drop-shadow-[0_0_6px_#0BA57F66]' /> Venturemond Studio
            </h3>
            <p className="para text-gray-300 leading-relaxed mb-6">
              Building ventures from zero to scale.  
              We partner with founders to research, validate, and build tech products that grow.  
              From idea validation to MVP development and go-to-market execution — Studio
              delivers end-to-end product execution under one roof.
            </p>
            <Link
              href="/studio"
              className=" para px-6 py-3 bg-[#0BA57F] text-black font-semibold rounded-full hover:bg-[#09c08f] transition"
            >
              Explore Studio
            </Link>
          </motion.div>

          {/* Venturemond SaaS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-gray-800 rounded-3xl p-5 md:p-7 lg:p-10 text-left hover:border-[#0BA57F] transition-all duration-300 group"
          >
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#0BA57F] mb-4">
              <TipsAndUpdatesIcon className='animate-float drop-shadow-[0_0_6px_#0BA57F66]' /> Venturemond SaaS
            </h3>
            <p className="para text-gray-300 leading-relaxed mb-6">
              Building smarter software for modern work.  
              Our SaaS division develops secure, scalable, and design-led software products for
              today’s teams. We focus on performance, privacy, and automation to make
              technology invisible — and impactful.
            </p>
            <Link
              href="/saas"
              className=" px-6 py-3 para border border-[#0BA57F] text-[#0BA57F] font-semibold rounded-full hover:bg-[#0BA57F] hover:text-black transition"
            >
              Explore SaaS
            </Link>
          </motion.div>
        </div>

        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 italic text-lg mt-4 md:mt-6 lg:mt-10 para"
        >
          One mission. Two engines. Infinite possibilities.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
