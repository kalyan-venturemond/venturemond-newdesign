"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Studio", path: "/studio" },
    { name: "SaaS", path: "/saas" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className=" sticky md:relative z-[9999] bg-black top-0 left-0 w-full  backdrop-blur-md   z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo1.png"
            alt="Venturemond Logo"
            width={80}
            height={80}
            priority
            className="object-contain lg:w-[100px]"
          />

        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-white text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`relative pb-1 transition duration-200 hover:text-[#0BA57F] ${pathname === link.path ? "text-[#0BA57F]" : ""
                  }`}
              >
                {link.name}
                {pathname === link.path && (
                  <span className="absolute left-0 -bottom-[2px] h-[2px] w-full bg-[#0BA57F] rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-[#111111] border border-gray-800 rounded-lg p-4 shadow-lg md:hidden">
            <ul className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block hover:text-[#0BA57F] ${pathname === link.path
                        ? "text-[#0BA57F] font-semibold"
                        : "text-gray-300"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
export default Navbar;