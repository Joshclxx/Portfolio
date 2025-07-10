import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <SectionContainer background="mt-10">
      <div className="max-w-[1440px] h-auto py-5 w-full bg-[#2A2F3B]">
        <p className="title text-center text-white mb-6">Project</p>

        {/* GRID */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 px-4">
          {/* Image Card - Center on small screens */}
          <div className="col-span-4 md:col-span-4 lg:col-span-4 flex justify-center">
            <div className="bg-[#3F4552] h-auto rounded-lg overflow-hidden shadow-md w-full max-w-sm">
              {/* Image */}
              <div className="relative w-full aspect-video">
                <Image
                  src="/icon/pos.svg"
                  alt="POS System"
                  fill
                  className="object-contain mt-2 mb-2"
                />
              </div>

              {/* Text */}
              <div className="px-8 py-4">
                <p className="font-semibold description text-center">
                  POS System
                </p>
                <div className="flex justify-between sm:flex-row sm:justify-between mt-2 text-sm text-[#64FFDA] space-y-2 sm:space-y-0">
                  <Link
                    href="https://pos-system-git-josh-joshuas-projects-a95d0abd.vercel.app/login?redirect=/"
                    target="_blank"
                    className="hover:underline"
                  >
                    View Site
                  </Link>
                  <Link
                    href="https://github.com/Joshclxx/POS-System.git"
                    target="_blank"
                    className="hover:underline"
                  >
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-4 md:col-span-4 lg:col-span-8 px-2">
            <p className="description text-justify mb-10">
              Point-of-Sales (POS) web-based system is built with Next.js,
              React, TypeScript, and Tailwind CSS, designed to streamline retail
              operations with a responsive and intuitive interface.
            </p>
            <p className="description text-justify text-white">
              It supports three main roles: Admin to add, update, and delete
              user account. Manager for handling create, update, and delete
              product, and Cashier for processing real-time transactions. The
              system features role-based access control for security and clean
              workflows, leveraging a modern tech stack for scalability and
              maintainability.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Project;
