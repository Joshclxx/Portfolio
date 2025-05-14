"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={52} />,
    title: "Responsive Frontend",
    description:
      "Web interfaces that work seamlessly across all devices and screen sizes.",
  },
  {
    icon: <FaMobileAlt size={52} />,
    title: "Fully Responsive",
    description:
      "Pixel-perfect layout tailored for mobile, tablet, and desktop views.",
  },
  {
    icon: <FaCode size={52} />,
    title: "Frontend Development",
    description:
      "Clean, maintainable code using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FaPaintBrush size={52} />,
    title: "UI/UX Design",
    description: "Visually appealing and intuitive user interface design.",
  },
];

const Service = () => {
  return (
    <SectionContainer background="w-full max-w-[1440px] mx-auto py-12">
      <div className="px-4 md:px-8 lg:px-[120px]">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-[24px] lg:text-[40px] font-bold mb-10"
        >
          SERVICES OFFER
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-primary transition-all duration-300 shadow-md shadow-amber-100/5 hover:shadow-lg hover:shadow-amber-300/20 rounded-xl p-6 text-center cursor-pointer"
            >
              <div className="flex justify-center mb-4 text-link transition-transform duration-300 group-hover:scale-140">
                {service.icon}
              </div>
              <h3 className="text-xl text-textPrimary font-semibold mb-2 group-hover:text-amber-300">
                {service.title}
              </h3>
              <p className="text-sm text-textSecondary group-hover:text-white/80">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Service;
