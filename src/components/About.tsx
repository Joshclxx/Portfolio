import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";

const About = () => {
  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2 mb-2">
      <div className="px-4 md:px-8 lg:px-[120px] pb-0">
        <div>
          <p className="text-[24px] md:text-[12px] lg:text-[40px] font-semibold text-center">
            ABOUT JOSHCLXX
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[175px_auto] gap-[52px] mt-5">
          <div className="flex flex-col items-center">
            <Image
              src="/image/jshclxx.svg"
              alt="Jshclxx"
              width={175}
              height={175}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-[18px] text-textPrimary text-justify">
              I&apos;m a frontend developer who builds lightning‑fast,
              accessible interfaces using React, Next.js, TypeScript, and
              Tailwind CSS. I translate complex requirements into intuitive,
              pixel‑perfect experiences—writing clean, maintainable code and
              fine‑tuning every interaction for peak performance.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="h-[12px] w-[12px] rounded-full bg-link" />
              <p className="font-semibold text-[18px]">Frontend Development</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[12px] w-[12px] rounded-full bg-link" />
              <p className="font-semibold text-[18px]">Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
