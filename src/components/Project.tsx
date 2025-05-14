"use client";

import React, { useState } from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import { motion } from "framer-motion";

const poweredBy = [
  { src: "/image/react.svg", alt: "React", label: "React" },
  { src: "/image/next-js.svg", alt: "Next.js", label: "Next JS" },
  { src: "/image/ts.svg", alt: "TypeScript", label: "TypeScript" },
  { src: "/image/tailwind.svg", alt: "TailwindCSS", label: "Tailwind CSS" },
];

const Project = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2 mb-2">
      <div className="px-4 md:px-8 lg:px-[120px] pb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.4, scale: { type: "spring", bounce: 0.5 } }}
        >
          <p className="text-[24px] md:text-[12px] lg:text-[40px] font-semibold text-center mb-2 lg:mb-[44px]">
            PROJECT
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* PROJECT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="card-container"
          >
            <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
              {/* Front */}
              <div className="card-front">
                <Image
                  src="/image/pos-system.svg"
                  alt="POS SYSTEM"
                  width={317}
                  height={217}
                  className="rounded"
                />
                <p className="text-[24px] font-semibold text-center mt-4">
                  POS System
                </p>
                <div className="flex justify-between w-full mt-1 px-4 text-[14px] gap-4">
                  <a
                    href="https://pos-system-indol-gamma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-link"
                  >
                    <em>View Site</em>
                  </a>
                  <a
                    href="https://github.com/Joshclxx/POS-System.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-link"
                  >
                    <em>View Code</em>
                  </a>
                </div>
                <button
                  className="px-4 py-1 bg-primary text-textPrimary rounded-lg flex text-center justify-center items-center hover:bg-hover/45"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  more details
                </button>
              </div>

              {/* Back */}
              <div
                className="card-back"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <p className="text-[18px] lg:text-[20px] font-semibold text-center mb-2">
                  POWERED BY
                </p>

                <div className="vertical-scroll-container h-[200px] px-2">
                  <div className="flex flex-col gap-6 items-center">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                      {poweredBy.map((logo, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ amount: 0.5 }}
                          transition={{ duration: 0.6, delay: 0.2 * index }}
                          className="powered-by-logo"
                        >
                          <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-sm lg:text-base font-semibold mt-2 text-center">
                            {logo.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* POWERED BY LOGOS */}
          {/* <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {poweredBy.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.5 * index }}
                  className="powered-by-logo"
                >
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm lg:text-lg font-semibold mt-2 text-center">
                    {logo.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Project;
