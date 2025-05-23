"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const mainLinks = NAV_LINKS.slice(0, 3); // Home, About, Connect

  return (
    <nav className="w-full bg-tertiary shadow-md sticky top-0 z-50">
      <div className="px-4 md:px-8 lg:px-[120px]">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl">JOSHCLXX</div>

          {/* Desktop Main Links (when menu is not open) */}
          {!isOpen && (
            <div className="hidden md:flex gap-8 items-center">
              {mainLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-textPrimary hover:text-hover transition-colors"
                  onClick={handleScroll}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Menu Icon */}
          <div className="md:flex md:items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
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

        {/* Full Menu (Mobile + Desktop when open) */}
        {isOpen && (
          <div className="flex flex-col items-center gap-6 py-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-textPrimary hover:text-hover transition-colors"
                onClick={handleScroll}
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
