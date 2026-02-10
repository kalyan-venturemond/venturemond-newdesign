"use client";

// Venturemond contact page logic
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


const CheckboxDropdown = ({ label, options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block mb-2 font-medium">{label}</label>

      <div
        onClick={() => setOpen(!open)}
        className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3 cursor-pointer flex items-center justify-between"
      >
        {selected.length === 0 ? (
          <span className="text-gray-400">Select options</span>
        ) : (
          <span>{selected.join(", ")}</span>
        )}

        {open ? (
          <KeyboardArrowUpIcon className="text-gray-300" />
        ) : (
          <KeyboardArrowDownIcon className="text-gray-300" />
        )}
      </div>

      {open && (
        <div className="absolute w-full bg-[#111111] border border-[#0BA57F]/20 mt-2 rounded-lg max-h-48 overflow-y-auto z-20 p-3 shadow-lg">
          {options.map((opt, i) => (
            <label key={i} className="flex items-center gap-2 py-1 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggleOption(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};


const ContactPage = () => {
  const [divisionOptions] = useState([
    "Venturemond Services — Build production systems",
    "Venturemond Studio — Co-build a venture with us",
  ]);

  const [division, setDivision] = useState([]);
  const [serviceOptions, setServiceOptions] = useState([]);
  const [selectedService, setSelectedService] = useState([]);
  const [submited, setSubmited] = useState(true);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
    budget: "",
    timeline: "",
    division: "",
    service: "",
    otherDescription: "",
  });

  const formRef = useRef();

  // Global Currency Support
  const [geoConfig, setGeoConfig] = useState({ currency: "INR", rate: 84 }); // Default INR

  useEffect(() => {
    const fetchGeo = async () => {
      try {
        const res = await fetch("/api/geo");
        if (res.ok) {
          const data = await res.json();
          // Use fetched data, fallback to INR default if something is empty
          setGeoConfig({
            currency: data.currency || "INR",
            rate: data.rate || 84
          });
        }
      } catch (e) {
        console.error("Geo fetch failed", e);
      }
    };
    fetchGeo();
  }, []);

  // Helper to format currency cleanly
  const formatMoney = (usdAmount) => {
    // 1. Convert
    let val = usdAmount * geoConfig.rate;

    // 2. Rounding for clean numbers (e.g. 207500 -> 200,000)
    // Dynamic precision based on magnitude
    if (val > 100000) val = Math.round(val / 10000) * 10000;
    else if (val > 1000) val = Math.round(val / 1000) * 1000;

    // 3. Format
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: geoConfig.currency,
        maximumFractionDigits: 0,
      }).format(val);
    } catch (e) {
      return val; // Fallback
    }
  };

  const baseTiers = [2500, 6000, 12000]; // Base USD tiers

  // Update service list based on division
  useEffect(() => {
    let services = [];

    if (division.includes("Venturemond Studio — Co-build a venture with us")) {
      services.push(
        "Research & Validation",
        "MVP / Product Development",
        "Product Strategy & Roadmap",
        "Growth & Go-To-Market"
      );
    }

    if (division.includes("Venturemond Services — Build production systems")) {
      services.push(
        "AI Automation",
        "AI Agents",
        "Custom ERPs & CRMs",
        "Other"
      );
    }

    setServiceOptions(services);
    setSelectedService([]);
  }, [division]);

  // Update formData when division changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      division: division.join(", "),
    }));
  }, [division]);

  // Update formData when services change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: selectedService.join(", "),
    }));
  }, [selectedService]);

  // Generic input handler
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formData.email && !formData.name && !formData.service) {
      setError("Please fill the required details")
      return;
    }

    setError("")
    console.log("Submitted Form Data:", formData);

    try {
      setLoading(true);

      // Determine API URL based on environment
      const isProduction = process.env.NODE_ENV === 'production';
      const defaultProdUrl = 'https://api.venturemond.com';
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || (isProduction ? defaultProdUrl : 'http://localhost:3001');

      console.log("Using API URL:", apiUrl); // Debug log to see which URL is being used

      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmited(false); // Success! Hide form.
      } else {
        setError(data.message || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError("Something went wrong! Please try again later.");
    } finally {
      setLoading(false); // ALWAYS stop loading
    }
  };

  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="heading font-extrabold mb-4">
          Let’s Build Something <span className="text-[#0BA57F]">Extraordinary</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto para leading-relaxed">
          Whether you’re launching a new product or looking to scale your idea — Venturemond is ready to partner with you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

        {/* LEFT FORM */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-lg md:text-xl font-semibold mb-3">Tell us what you’d like to build.</h2>

          {submited ? (
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 text-gray-300">

              {/* NAME */}
              <div>
                <label className="block mb-2 font-medium">Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChangeInput}
                  required
                  placeholder="Your full name"
                  className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 font-medium">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChangeInput}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3"
                />
              </div>

              {/* COMPANY */}
              <div>
                <label className="block mb-2 font-medium">Company / Startup Name / Individual</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={onChangeInput}
                  placeholder="e.g. Alpha Tech Pvt. Ltd."
                  className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3"
                />
              </div>

              {/* DIVISION */}
              <CheckboxDropdown
                label="What are you interested in?*"
                options={divisionOptions}
                selected={division}
                setSelected={setDivision}
              />

              {/* SERVICES */}
              <CheckboxDropdown
                label="Choose a Service*"
                options={serviceOptions}
                selected={selectedService}
                setSelected={setSelectedService}
              />

              {selectedService.includes("Other") && (
                <div>
                  <label className="block mb-2 font-medium">Please specify the service</label>
                  <input
                    type="text"
                    name="otherDescription"
                    value={formData.otherDescription}
                    onChange={onChangeInput}
                    placeholder="Describe the service you are looking for..."
                    className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3"
                  />
                </div>
              )}

              {/* DESCRIPTION */}
              <div>
                <label className="block mb-2 font-medium">Brief About Your Project*</label>
                <textarea
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={onChangeInput}
                  placeholder="Tell us about your idea..."
                  className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3"
                ></textarea>
              </div>

              {/* BUDGET + TIMELINE */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 font-medium">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={onChangeInput}
                    className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3"
                  >
                    <option value="" disabled>Select Budget Range</option>
                    <option value="" disabled>Select Budget Range ({geoConfig.currency})</option>
                    <option>Under {formatMoney(baseTiers[0])}</option>
                    <option>{formatMoney(baseTiers[0])} – {formatMoney(baseTiers[1])}</option>
                    <option>{formatMoney(baseTiers[1])} – {formatMoney(baseTiers[2])}</option>
                    <option>Above {formatMoney(baseTiers[2])}</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">How Soon Do You Want to Start?</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={onChangeInput}
                    className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3"
                  >
                    <option value="" disabled>Select Time Frame</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>In 2–3 months</option>
                    <option>Exploring for now</option>
                  </select>
                </div>

              </div>
              {error && <p className="text-red-700">{error}</p>}
              <button type="submit" className="btn1" disabled={loading}>
                {loading ? "Submiting..." : "Submit Inquiry"}
              </button>
            </form>
          ) : (
            <p className="text-[#0BA57F] text-lg">
              Form Submitted Successfully. We will reach out to you within 48 hours.
            </p>
          )}
        </motion.div>

        {/* RIGHT CONTACT INFO */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="heading font-semibold mb-4">Get in touch</h2>

          <div className="space-y-6 para text-gray-300">
            <div className="space-y-3">
              <a href="mailto:hello@venturemond.com" className="flex items-center gap-3 hover:text-[#0BA57F] transition-colors">
                <EmailIcon className="text-[#0BA57F]" /> hello@venturemond.com
              </a>

              <a href="tel:+916302458752" className="flex items-center gap-3 hover:text-[#0BA57F] transition-colors">
                <CallIcon className="text-[#0BA57F]" /> +91 6302458752
              </a>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Bizness+Square,+Hitec+City,+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-[#0BA57F] transition-colors"
            >
              <LocationOnIcon className="text-[#0BA57F] shrink-0 mt-1" />
              <span>4th Floor, Bizness Square, Hitec City, Hyderabad – 500084</span>
            </a>

            <div className="space-y-4 pt-2">
              <p className="flex items-center gap-3">
                <LinkedInIcon className="text-[#0BA57F]" />
                <Link href="https://www.linkedin.com/company/venturemond" target="_blank" className="hover:text-white transition-colors">
                  LinkedIn / Venturemond
                </Link>
              </p>


            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
