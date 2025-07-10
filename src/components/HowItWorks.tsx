import React from "react";
import SectionContainer from "./SectionContainer";
import ImageContainer from "./ImageContainer";

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
        <p className="title text-center">How It Works?</p>
        <p className="description text-center">
          I focus on delivering clean, scalable, and responsive interfaces—every
          step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {items.map((item, index) => (
          <div key={index} className="px-4">
            <ImageContainer
              image={item.image}
              title={item.title}
              description={item.description}
              imageSize={200}
              containerClassName="bg-[#3F4552] rounded-xl h-[450px] px-2 shadow-md"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default HowItWorks;
