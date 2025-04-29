import React from "react";
import SectionContainer from "./SectionContainer";

const Work = () => {
  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2 mb-2">
      <div className="px-4 md:px-8 lg:px-[120px] pb-0">
        {/* TITLE */}
        <div className="text-[24px] md:text-[12px] lg:text-[40px] font-semibold text-center">
          WORK EXPERIENCE
        </div>

        {/* CONTENT */}
        <div className="flex flex-col mt-4">
          <p className="text-[20px] md:text-[11px] lg:text-[28px] font-semibold text-textPrimary">
            Freelance Frontend Developer
          </p>
          <p className="text-[18px] md:text-[9px] lg:text-[24px] text-textPrimary font-semibold mt-2">
            January 2025 - Present
          </p>

          <div className="mt-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-link w-2 h-2 rounded-full shrink-0" />
              <p className="text-[18px] md:text-[9px] lg:text-[24px] text-textPrimary text-justify">
                Built responsive websites using React, Next.js, TypeScript, and
                Tailwind CSS.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-link w-2 h-2 rounded-full shrink-0" />
              <p className="text-[18px] md:text-[9px] lg:text-[24px] text-textPrimary text-justify">
                Translated client requirements into pixel-perfect, accessible
                design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Work;
