import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";

const poweredBy = [
  { src: "/image/react.svg", alt: "React", label: "React" },
  { src: "/image/next-js.svg", alt: "Next.js", label: "Next JS" },
  { src: "/image/ts.svg", alt: "TypeScript", label: "TypeScript" },
  { src: "/image/tailwind.svg", alt: "TailwindCSS", label: "Tailwind CSS" },
];

const Project = () => {
  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto mt-2 mb-2">
      <div className="px-4 md:px-8 lg:px-[120px] pb-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* LEFT - POS SYSTEM */}
          <div className="bg-secondary w-[341px] flex flex-col items-center p-4 rounded-md">
            <Image
              src="/image/pos-system.svg"
              alt="POS SYSTEM"
              width={317}
              height={217}
              className="rounded-md"
            />
            <p className="font-semibold text-[24px] text-textPrimary mt-4">
              POS System
            </p>
            <div className="flex justify-between w-full mt-2 text-[14px]">
              <a
                href="https://pos-system-indol-gamma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline text-link"
              >
                <em>Live View Project</em>
              </a>
              <a
                href="https://github.com/Joshclxx/POS-System.git"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline text-link"
              >
                <em>GitHub Repository</em>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[24px] md:text-[12px] lg:text-[40px] font-semibold text-center">
              POWERED BY
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {poweredBy.map((logo, index) => (
                <div
                  key={index}
                  className="container bg-secondary rounded-xl shadow-md shadow-textPrimary/70  flex flex-col items-center p-4 w-[156px] h-[156px] transition-transform transform hover:scale-110 hover:shadow-link/65 hover:bg-hover/45"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <p className="text-textPrimary text-[20px] font-semibold mt-2 text-center">
                    {logo.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Project;
