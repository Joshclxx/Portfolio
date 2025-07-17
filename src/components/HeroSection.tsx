// HeroSection.tsx
import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <SectionContainer background="mt-10">
      <div className="text-center max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="font-bold text-[48px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-tight hero"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4 }}
          >
            Build Stunning
          </motion.div>

          <span className="font-bold text-[40px] sm:text-[40px] md:text-[52px] lg:text-[72px] leading-tight hero">
            <Typewriter
              words={["Front-end", "UI/UX Design"]}
              loop={true}
              cursor
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </div>

        <motion.div
          className="text-[#E4E7EB] text-[18px] sm:text-[24px] md:text-[30px] mt-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Using React, Next.js & Tailwind CSS to deliver clean, accessible, and
          high-performing frontend solutions.
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-6 flex justify-center items-center gap-4"
      >
        <motion.a
          href="/pdf/Colobong_CV.pdf"
          download
          className="w-[164px] h-[42px] border-1 border-[#64FFDA] bg-[#64FFDA]/45 rounded-lg flex items-center justify-center hover:bg-transparent font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.6 }}
        >
          Download CV
        </motion.a>

        <motion.a
          href="https://github.com/Joshclxx"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.8 }}
        >
          <Image src="/icon/github.svg" alt="GitHub" width={42} height={42} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/joshua-colobong-28bb20272/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 1.0 }}
        >
          <Image
            src="/icon/linkedin-black.svg"
            alt="LinkedIn"
            width={42}
            height={42}
          />
        </motion.a>
      </motion.div>

      <div className="w-full mt-8">
        <Image
          src="/image/hero.svg"
          alt="hero"
          width={1920}
          height={1080}
          className="w-full h-auto mx-auto object-contain"
          priority
        />
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
