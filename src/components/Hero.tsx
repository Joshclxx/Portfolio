"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2 mb-2">
      <div className="px-4 md:px-8 lg:px-[120px] pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px] items-center">
          <div className="flex flex-col items-start justify-center text-left gap-8">
            {/* ANIMATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", bounce: 0.5 },
              }}
            >
              <p className="font-bold text-[36px] md:text-[48px] lg:text-[64px] leading-none hero mt-5">
                Hello,
              </p>
            </motion.div>

            {/* TYPEWRITER ANIMATION */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bold text-[36px] md:text-[48px] lg:text-[64px] leading-none hero-2"
            >
              I&apos;m{" "}
              <span className="inline-block">
                <Typewriter
                  words={["Joshua"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y1: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-semibold text-[14px] md:text-[16px] lg:text-[20px] text-left"
            >
              <strong>Frontend Developer</strong> Based in the Philippines.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 mt-12"
            >
              <a
                href="/pdf/cv-colobong.pdf"
                download
                className="w-[216px] h-[52px] border-1 border-link bg-link/45 rounded-lg flex items-center justify-center hover:bg-transparent font-bold"
              >
                Download CV
              </a>

              {/* GITHUB PROFIL */}
              <a
                href="https://github.com/Joshclxx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] flex items-center justify-center hover:bg-link/45 rounded-full"
              >
                <Image
                  src="/icon/git.svg"
                  alt="GitHub"
                  width={42}
                  height={42}
                />
              </a>

              {/* LINKEDIN PROFILE */}
              <a
                href="https://www.linkedin.com/in/joshua-colobong-28bb20272/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] flex items-center justify-center hover:bg-link/45 rounded-full"
              >
                <Image
                  src="/icon/linkedin.svg"
                  alt="LinkedIn"
                  width={42}
                  height={42}
                />
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <Image
              src="/image/hero-img.svg"
              alt="Hero"
              width={400}
              height={500}
              className="object-contain w-full max-w-[400px] lg:max-w-[641px]"
            />
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
