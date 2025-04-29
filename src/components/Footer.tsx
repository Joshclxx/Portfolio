import Image from "next/image";

const contactMe = [
  { src: "/icon/github.svg", alt: "GitHub" },
  { src: "/icon/ig.svg", alt: "Instagram" },
  { src: "/icon/gmail.svg", alt: "Gmail" },
  { src: "/icon/in.svg", alt: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-textPrimary/70 mt-[52px] bg-tertiary">
      <div className="px-4 md:px-[120px]">
        <div className="w-full max-w-[1440px] mx-auto h-[260px] flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between flex-1 gap-6 md:gap-0">
            <p className="text-textPrimary text-[32px] md:text-[48px] font-bold text-center md:text-left">
              JOSHCLXX
            </p>
            <div className="flex gap-6">
              {contactMe.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={32}
                  height={32}
                  className="object-contain transition-transform transform hover:scale-110"
                />
              ))}
            </div>
          </div>
          {/* COPYRIGHT */}
          <div className="text-center pb-4">
            <p className="text-sm text-gray-500">
              Copyright © {new Date().getFullYear()}. All rights reserved. This
              template created by: Joshclxx
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
