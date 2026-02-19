import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-gray-800 text-gray-400 ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Left Section - Logo and Tagline */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logowon.png"
              alt="Venturemond Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-[#0BA57F] text-sm lg:text-xl font-semibold">
              Venture Mond
            </span>
          </Link>
          <p className="text-sm text-gray-400">
            Venture Mond is a next-generation services and venture studio company.
            We design, build & scale production-grade software for clients, while co-building ventures where ideas become products and products become scalable businesses
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-white font-medium mb-2">Explore</h3>
          <Link href="/" className="hover:text-[#0BA57F] transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-[#0BA57F] transition">
            Services
          </Link>
          <Link href="/studio" className="hover:text-[#0BA57F] transition">
            Studio
          </Link>
          <Link href="/portfolio" className="hover:text-[#0BA57F] transition">
            Portfolio
          </Link>

          <Link href="/about" className="hover:text-[#0BA57F] transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-[#0BA57F] transition">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-[#0BA57F] transition">
            Privacy Policy
          </Link>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-white font-medium mb-2">Contact</h3>
          <a href="mailto:hello@venturemond.com" className="hover:text-[#0BA57F] hover:underline transition">📧 hello@venturemond.com</a>
          <a href='https://www.googlemaps.com' className="hover:text-[#0BA57F] hover:underline transition">📍 4th Floor, Bizness Square, Hitec City, Hyderabad – 500084</a>
          <div className="flex items-center gap-4 mt-2">
            <Link
              href="https://www.linkedin.com/company/venturemond"
              target="_blank"
              className="text-[#0BA57F] hover:text-[#09c08f] transition"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://wa.me/916302458752"
              target="_blank"
              className="text-[#0BA57F] hover:text-[#09c08f] transition"
            >
              <WhatsAppIcon sx={{ fontSize: 24 }} />
            </Link>


            {/* Instagram - Disabled */}
            <div
              className="text-[#0BA57F] opacity-60 cursor-default relative group"
            >
              <Instagram size={24} />
            </div>

            {/* Facebook - Disabled */}
            <div
              className="text-[#0BA57F] opacity-60 cursor-default relative group"
            >
              <Facebook size={24} />
            </div>

            {/* X (Twitter) - Disabled */}
            <div
              className="text-[#0BA57F] opacity-60 cursor-default relative group"
            >
              {/* X Logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © 2025 Venture Mond. All rights reserved.
      </div>
    </footer>
  );
}


export default Footer