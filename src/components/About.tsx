"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
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
          <p className="text-[24px] md:text-[12px] lg:text-[40px] font-semibold text-center">
            ABOUT JOSHCLXX
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[175px_auto] gap-[52px] mt-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Image
              src="/image/jshclxx.svg"
              alt="Jshclxx"
              width={175}
              height={175}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col"
          >
            <p className="font-semibold text-[18px] md:text-[9px] lg:text-[24px] text-textPrimary text-justify">
              I&apos;m a frontend developer who builds lightning‑fast,
              accessible interfaces using React, Next.js, TypeScript, and
              Tailwind CSS. I translate complex requirements into intuitive,
              pixel‑perfect experiences—writing clean, maintainable code and
              fine‑tuning every interaction for peak performance.
            </p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-2 mt-4"
            >
              <div className="h-[12px] w-[12px] rounded-full bg-link" />
              <p className="font-semibold text-[18px] md:text-[9px] lg:text-[24px]">
                Frontend Development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex items-center gap-2"
            >
              <div className="h-[12px] w-[12px] rounded-full bg-link" />
              <p className="font-semibold text-[18px] md:text-[9px] lg:text-[24px]">
                Responsive Design
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
