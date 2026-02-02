"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Venturemond Automate",
    description: "No-code workflow engine that connects tools and automates operations.",
    stage: "Prototype",
  },
  {
    name: "Venturemond CRM",
    description:
      "Smart CRM designed for startups and scaling teams to manage customers efficiently.",
    stage: "Research",
  },
  {
    name: "Venturemond Desk AI",
    description:
      "Document intelligence and summarization assistant for professionals.",
    stage: "Concept",
  },
];

const ProductSuite = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="heading font-bold">
            Expanding the <span className="text-[#0BA57F]">future of work.</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto  para">
            Our SaaS division is building an ecosystem of tools that make businesses
            smarter, faster, and more connected. Each product focuses on efficiency,
            control, and innovation.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto para">
            Together, these products represent the foundation of the next generation of
            enterprise software.
          </p>
        </motion.div>

       
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
>
  {products.map((product, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#111]/80 border border-[#0BA57F]/20 rounded-2xl p-6 hover:border-[#0BA57F]/50 hover:shadow-[0_0_20px_#0BA57F33] transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <span
          className={`text-xs px-3 py-1 rounded-full border ${
            product.stage === "Final Build"
              ? "border-[#0BA57F]/40 text-[#0BA57F]"
              : product.stage === "Prototype"
              ? "border-yellow-500/40 text-yellow-400"
              : product.stage === "Research"
              ? "border-blue-500/40 text-blue-400"
              : "border-gray-400/40 text-gray-400"
          }`}
        >
          {product.stage}
        </span>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default ProductSuite;
