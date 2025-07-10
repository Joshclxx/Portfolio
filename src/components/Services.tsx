"use client";

import React, { useState, useEffect } from "react";
import SectionContainer from "./SectionContainer";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

type ServiceType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: ServiceType[] = [
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

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SectionContainer background="mt-10">
      <div className="px-4 md:px-8 lg:px-[120px]">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="title text-center mb-10"
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
              className="group bg-[#3F4552] transition-all duration-300 shadow-md hover:shadow-lg rounded-xl p-6 text-center cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex justify-center mb-4 text-link group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="description font-bold mb-2 group-hover:text-amber-300">
                {service.title}
              </h3>
              <p className="text-sm text-textSecondary group-hover:text-white/80">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-[#3F4552] text-textPrimary p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 text-link">{selectedService.icon}</div>
              <h3 className="text-2xl font-bold mb-2">
                {selectedService.title}
              </h3>
              <p className="text-sm">{selectedService.description}</p>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 text-textPrimary text-xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};

export default Services;
