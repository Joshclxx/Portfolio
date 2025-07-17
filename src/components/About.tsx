import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <SectionContainer background="mt-10">
      <div className="w-full bg-[#2A2F3B] py-5">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="title text-center"
        >
          About Joshclxx
        </motion.div>
        {/* Max width content container */}
        <div className="max-w-[1440px] w-full mx-auto px-4 py-5 grid grid-cols-12 gap-4  items-center">
          {/* Image */}

          <div className="col-span-12 md:col-span-4 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="relative w-[150px] sm:w-[200px] aspect-square"
            >
              <Image
                src="/image/josh.svg"
                alt="josh"
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 150px, 200px"
              />
            </motion.div>
          </div>

          {/* Text */}

          <div className="col-span-12 md:col-span-8 text-center md:text-left flex flex-col gap-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="description text-justify px-2"
            >
              I&apos;m Joshua, a frontend developer passionate about building
              fast, accessible, and responsive web interfaces. I specialize in
              React, Next.js, TypeScript, and Tailwind CSS—transforming ideas
              and designs into smooth, pixel-perfect experiences. With a strong
              focus on clean code and performance, I enjoy turning complex
              requirements into intuitive user interfaces that work across all
              devices.
            </motion.div>

            {/* BULLET */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="flex gap-2 items-center px-2"
            >
              <div className="h-2 w-2 rounded-full bg-[#64FFDA]" />
              <p className="description text-justify">Frontend Development</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="flex gap-2 items-center px-2"
            >
              <div className="h-2 w-2 rounded-full bg-[#64FFDA]" />
              <p className="description text-justify">Responsive Design</p>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
