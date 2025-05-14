"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import ProjectContainer from "./ProjectContainer";
import { motion } from "framer-motion";

const projects = [
  {
    title: "POS System",
    image: "/image/pos-system.svg",
    liveUrl: "https://pos-system-indol-gamma.vercel.app/",
    codeUrl: "https://github.com/Joshclxx/POS-System.git",
    poweredBy: [
      { src: "/image/react.svg", alt: "React", label: "React" },
      { src: "/image/next-js.svg", alt: "Next.js", label: "Next JS" },
      { src: "/image/ts.svg", alt: "TypeScript", label: "TypeScript" },
      { src: "/image/tailwind.svg", alt: "TailwindCSS", label: "Tailwind CSS" },
    ],
  },
];

const Project = () => {
  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2 mb-2">
      <div className="px-4 md:px-8 lg:px-[120px] pb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", bounce: 0.5 },
          }}
        >
          <p className="text-[24px] md:text-[12px] lg:text-[40px] font-semibold text-center mb-2 lg:mb-[44px]">
            PROJECT
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 flex-wrap">
          {projects.map((project, index) => (
            <ProjectContainer key={index} {...project} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Project;
