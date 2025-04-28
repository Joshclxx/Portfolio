"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="px-4 md:px-8 lg:px-[120px] mt-5">
      <nav className="w-full bg-tertiary shadow-md">
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-[120px] py-4">
          {/* Logo */}
          <div className="font-bold text-xl">JOSHCLXX</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-textPrimary hover:text-hover transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  // X (Close icon)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger (Menu icon)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-textPrimary hover:text-hover transition-colors"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
