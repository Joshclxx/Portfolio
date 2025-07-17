import React from "react";
import SectionContainer from "./SectionContainer";
import ImageContainer from "./ImageContainer";
import { motion } from "framer-motion";

const Development = () => {
  const items = [
    {
      title: "React",
      image: "/icon/react.svg",
    },
    {
      title: "Next JS",
      image: "/icon/nextjs.svg",
    },
    {
      title: "TypeScript",
      image: "/icon/typecript.svg",
    },
    {
      title: "Tailwind CSS",
      image: "/icon/tailwindcss.svg",
    },
  ];

  return (
    <SectionContainer background="mt-10">
      {/* SECTION CONTAINER */}
      <div className="w-full h-auto py-5">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="title text-center text-white pt-6"
        >
          Development Toolkit
        </motion.div>

        {/* IMAGE */}
        <div className="max-w-[1440px] w-full mx-auto grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 items-center px-4 py-5">
          {items.map((item, index) => (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-3"
            >
              <ImageContainer
                image={item.image}
                title={item.title}
                imageSize={80}
                containerClassName="bg-[#3F4552] rounded-xl h-[200px] px-2 shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Development;
