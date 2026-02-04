import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

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
            We design, build, and scale production-grade software for clients, while co-building ventures where ideas become products and products become scalable businesses.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-white font-medium mb-2">Explore</h3>
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
          <a href="emailto:hello@venturemond.com" className="hover:text-[#0BA57F] hover:underline transition">📧 hello@venturemond.com</a>
          <a href='https://www.googlemaps.com' className="hover:text-[#0BA57F] hover:underline transition">📍 4th Floor, Bizness Square, Hitec City, Hyderabad – 500084</a>
          <Link
            href="https://www.linkedin.com/company/venturemond"
            target="_blank"
            className="text-[#0BA57F] hover:underline"
          >
            <Linkedin size={24} />
          </Link>
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