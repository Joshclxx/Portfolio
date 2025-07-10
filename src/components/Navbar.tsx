import React from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="px-4 md:px-8 lg:px-[120px]">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-[20px] text-white hover:text-[#64FFDA]">
            Joshclxx
          </div>
          <div className="flex gap-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
