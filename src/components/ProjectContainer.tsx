"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type PoweredByItem = {
  src: string;
  alt: string;
  label: string;
};

type ProjectContainerProps = {
  title: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  poweredBy: PoweredByItem[];
};

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  title,
  image,
  liveUrl,
  codeUrl,
  poweredBy,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.75 }}
      className="card-container"
    >
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="card-front">
          <Image
            src={image}
            alt={title}
            width={317}
            height={217}
            className="rounded"
          />
          <p className="text-[24px] font-semibold text-center mt-4">{title}</p>
          <div className="flex justify-between w-full mt-1 px-4 text-[14px] gap-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-link"
            >
              <em>View Site</em>
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-link"
            >
              <em>View Code</em>
            </a>
          </div>
          <button
            className="px-4 py-1 bg-primary text-textPrimary rounded-lg flex text-center justify-center items-center hover:bg-hover/45"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            more details
          </button>
        </div>

        {/* Back */}
        <div className="card-back" onClick={() => setIsFlipped(!isFlipped)}>
          <p className="text-[18px] lg:text-[20px] font-semibold text-center mb-2">
            POWERED BY
          </p>

          <div className="vertical-scroll-container h-[200px] px-2">
            <div className="flex flex-col gap-6 items-center">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {poweredBy.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="powered-by-logo"
                  >
                    <div className="relative w-16 h-16 lg:w-18 lg:h-18">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm lg:text-base font-semibold mt-2 text-center">
                      {logo.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectContainer;
