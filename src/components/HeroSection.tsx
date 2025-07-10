import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";

const HeroSection = () => {
  return (
    <SectionContainer background="mt-10">
      <div className="text-center max-w-[1440px] mx-auto">
        <p className="font-bold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight hero">
          Build Stunning Front-ends.
        </p>
        <p className="text-[#E4E7EB] text-[18px] sm:text-[24px] md:text-[30px] mt-4">
          Using React, Next.js & Tailwind CSS to deliver clean, accessible, and
          high-performing frontend solutions.
        </p>
      </div>

      <div className="mt-6 flex justify-center items-center gap-4">
        <a
          href="/pdf/cv-colobong.pdf"
          download
          className="w-[164px] h-[42px] border-1 border-[#64FFDA] bg-[#64FFDA]/45 rounded-lg flex items-center justify-center hover:bg-transparent font-bold"
        >
          Download CV
        </a>

        <a
          href="https://github.com/Joshclxx"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
        >
          <Image src="/icon/github.svg" alt="GitHub" width={42} height={42} />
        </a>

        <a
          href="https://www.linkedin.com/in/joshua-colobong-28bb20272/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
        >
          <Image
            src="/icon/linkedin-black.svg"
            alt="LinkedIn"
            width={42}
            height={42}
          />
        </a>
      </div>

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
