import React from "react";
import SectionContainer from "./SectionContainer";
import ImageContainer from "./ImageContainer";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const items = [
    {
      title: "Learn",
      description:
        "I stay up to date with the latest web technologies, frameworks, and best practices through hands-on learning and continuous improvement.",
      image: "/icon/learn.svg",
    },
    {
      title: "Build",
      description:
        "I turn knowledge into action by building real-world projects that solve problems and demonstrate my technical abilities.",
      image: "/icon/build.svg",
    },
    {
      title: "Collaborate",
      description:
        "I work effectively in teams, contribute to open-source, and share ideas to build better products together.",
      image: "/icon/collaboration.svg",
    },
  ];

  return (
    <SectionContainer background="mt-10">
      <div className="flex flex-col justify-center gap-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="title text-center"
        >
          How It Works?
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="description text-center"
        >
          I focus on delivering clean, scalable, and responsive interfaces—every
          step of the way.
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {items.map((item, index) => (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            key={index}
            className="px-4"
          >
            <ImageContainer
              image={item.image}
              title={item.title}
              description={item.description}
              imageSize={200}
              containerClassName="bg-[#3F4552] rounded-xl h-[450px] px-2 shadow-md"
            />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default HowItWorks;
