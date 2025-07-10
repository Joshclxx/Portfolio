import Image from "next/image";

const contactMe = [
  {
    src: "/icon/github.svg",
    alt: "GitHub",
    href: "https://github.com/Joshclxx",
  },
  {
    src: "/icon/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/_jshclxx/profilecard/?igsh=MTNkMDd4cWdhM25uYQ==",
  },
  {
    src: "/icon/gmail.svg",
    alt: "Gmail",
    href: "mailto:joshuacolobong11@gmail.com",
  },
  {
    src: "/icon/linkedin-black.svg",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/joshua-colobong-28bb20272/",
  },
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
                <a
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={32}
                    height={32}
                    className="object-contain transition-transform transform hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="text-center pb-4">
            <p className="text-sm text-textPrimary/50">
              © {new Date().getFullYear()} Joshclxx. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
