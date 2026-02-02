"use client";

import { motion } from "framer-motion";

const AboutTeam = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
      <div className="flex flex-col justify-center text-center gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading font-bold mb-6">
            Founder-led. Execution-focused. <span className="text-[#0BA57F]">Driven by Impact.</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            At Venturemond, we believe execution beats ideas. Our teams thrive on innovation, 
            collaboration, and ownership — building real-world solutions that matter.
          </p>
          <p className="text-gray-400 leading-relaxed">
            If you love startups, cutting-edge tech, and hands-on product building, 
            you’ll feel right at home with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full gap-3 flex flex-col sm:flex-row items-center justify-center text-[#0BA57F] text-xl font-semibold ">
            <p>💡 Innovative. </p>
            
            <p>🤝 Collaborative.</p>
            
             <p>🚀 Fast-paced.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
