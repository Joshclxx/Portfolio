"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2 mb-2">
      <div className="px-4 md:px-8 lg:px-[120px] pb-0">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", bounce: 0.5 },
          }}
        >
          <div className="text-[24px] md:text-[12px] lg:text-[40px] font-semibold text-center">
            WORK EXPERIENCE
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col mt-4">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[20px] md:text-[11px] lg:text-[28px] font-semibold text-textPrimary">
              Freelance Frontend Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-[18px] md:text-[9px] lg:text-[24px] text-textPrimary font-semibold mt-2">
              January 2025 - Present
            </p>
          </motion.div>

          <div className="mt-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex items-center gap-3"
            >
              <div className="bg-link w-2 h-2 rounded-full shrink-0" />
              <p className="text-[18px] md:text-[9px] lg:text-[24px] text-textPrimary text-justify">
                Built responsive websites using React, Next.js, TypeScript, and
                Tailwind CSS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className="bg-link w-2 h-2 rounded-full shrink-0" />
              <p className="text-[18px] md:text-[9px] lg:text-[24px] text-textPrimary text-justify">
                Translated client requirements into pixel-perfect, accessible
                design.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Work;
