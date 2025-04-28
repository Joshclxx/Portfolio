import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";

const Hero = () => {
  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2">
      <div className="px-4 md:px-8 lg:px-[120px] pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px] items-center">
          <div className="flex flex-col items-start justify-center text-left gap-8">
            <p className="font-bold text-[36px] md:text-[48px] lg:text-[64px] leading-none hero">
              Hello,
            </p>
            <p className="font-bold text-[36px] md:text-[48px] lg:text-[64px] leading-none hero-2">
              I'm Joshua
            </p>
            <p className="font-semibold text-[14px] text-left">
              Fast, easy-to-use React and Next.js sites styled with Tailwind
              CSS.
            </p>
            <div className="w-full max-w-[216px] h-[52px] border-2 border-link bg-transparent rounded-lg flex items-center justify-center hover:bg-hover/45">
              <p className="text-center font-semibold">CONNECT WITH ME</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/image/hero-img.svg"
              alt="Hero"
              width={400}
              height={500}
              className="object-contain w-full max-w-[400px] lg:max-w-[641px]"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
