"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const WorkspaceWaitlist = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    interest: "",
  });
  const [formError , setFormError] = useState("")
  const [loading , setLoading] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email){
      setFormError("Please Enter Required details")
      return ;
    }
    setFormError("")
    setSubmitted(true);
    try{
      setLoading(true)
      const response = await fetch('/api/saas-email' ,  {
        method:"POST" , 
        headers:{
          "content-type":"application/json"
        } , 
        body:JSON.stringify(formData)
      })
    }catch(error){
      setFormError("Something went wrong! please try again")
      console.log("Error in submiting data" , error)
    }
    setLoading(false)
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#0B0B0B] text-white px-6 md:px-16 py-24">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0BA57F]/10 via-transparent to-[#0B0B0B] -z-10"></div>

      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full text-center"
        >
          
          <h1 className="heading font-extrabold leading-tight mb-4">
            Join the{" "}
            <span className="text-[#0BA57F]">Venturemond Workspace</span>{" "}
            Waitlist.
          </h1>
          <p className="text-gray-300 mb-10 para">
            Be the first to experience our private, intelligent workspace.
          </p>

          
          <form
            onSubmit={handleSubmit}
            className="bg-[#111111] p-8 rounded-2xl border border-[#0BA57F]/20 shadow-[0_0_20px_#0BA57F11] space-y-5 text-left"
          >
            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                onChange={handleChange}
                className="w-full bg-[#0B0B0B] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                onChange={handleChange}
                className="w-full bg-[#0B0B0B] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Company (optional)
              </label>
              <input
                type="text"
                name="company"
                placeholder="e.g. Alpha Tech Pvt. Ltd."
                onChange={handleChange}
                className="w-full bg-[#0B0B0B] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Team Size (optional)
              </label>
              <input
                type="text"
                name="teamSize"
                placeholder="e.g. 5–10 members"
                onChange={handleChange}
                className="w-full bg-[#0B0B0B] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Why are you interested? (optional)
              </label>
              <textarea
                name="interest"
                placeholder="Tell us briefly what excites you about Venturemond Workspace..."
                rows={3}
                onChange={handleChange}
                className="w-full bg-[#0B0B0B] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
              />
            </div>

            {formError && <p>{formError}</p>}

            <button
              type="submit"
              className="btn1"
              disabled={loading}
            >
              {loading?"joining..." :"Join Waitlist"}
            </button>
          </form>
        </motion.div>
      ) : (
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <CheckCircleIcon className="text-[#0BA57F] text-6xl mb-4" />
          <h2 className="text-3xl font-semibold mb-2 text-white">
            You’re in!
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We’ll notify you as soon as early access to{" "}
            <span className="text-[#0BA57F] font-medium">
              Venturemond Workspace
            </span>{" "}
            opens.
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default WorkspaceWaitlist;
