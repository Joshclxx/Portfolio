"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="px-4 md:px-8 lg:px-[120px]">
        {/* Top Row */}
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-[20px] text-white hover:text-[#64FFDA]">
            Joshclxx
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            )}
          </button>

          <div className="hidden md:flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={`#${link.href}`}
                scroll={true}
                className="text-white hover:text-[#64FFDA] text-[20px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col text-center bg-[#2A2F3B]/65 gap-4 py-4 rounded-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={`#${link.href}`}
                scroll={true}
                className="text-white hover:text-[#64FFDA] text-[18px]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
