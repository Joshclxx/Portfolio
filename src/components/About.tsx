import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";

const About = () => {
  return (
    <SectionContainer background="mt-10">
      <div className="w-full bg-[#2A2F3B] py-5">
        <p className="title text-center">About Joshclxx</p>
        {/* Max width content container */}
        <div className="max-w-[1440px] w-full mx-auto px-4 py-5 grid grid-cols-12 gap-4  items-center">
          {/* Image */}

          <div className="col-span-12 md:col-span-4 flex justify-center">
            <div className="relative w-[150px] sm:w-[200px] aspect-square">
              <Image
                src="/image/josh.svg"
                alt="josh"
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>
          </div>

          {/* Text */}

          <div className="col-span-12 md:col-span-8 text-center md:text-left flex flex-col gap-2">
            <p className="description text-justify px-2">
              I&apos;m Joshua, a frontend developer passionate about building
              fast, accessible, and responsive web interfaces. I specialize in
              React, Next.js, TypeScript, and Tailwind CSS—transforming ideas
              and designs into smooth, pixel-perfect experiences. With a strong
              focus on clean code and performance, I enjoy turning complex
              requirements into intuitive user interfaces that work across all
              devices.
            </p>

            {/* BULLET */}
            <div className="flex gap-2 items-center px-2">
              <div className="h-2 w-2 rounded-full bg-[#64FFDA]" />
              <p className="description text-justify">Frontend Development</p>
            </div>

            <div className="flex gap-2 items-center px-2">
              <div className="h-2 w-2 rounded-full bg-[#64FFDA]" />
              <p className="description text-justify">Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
