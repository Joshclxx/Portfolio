import React from "react";
import SectionContainer from "./SectionContainer";
import ImageContainer from "./ImageContainer";

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
        <p className="title text-center text-white pt-6">Development Toolkit</p>

        {/* IMAGE */}
        <div className="max-w-[1440px] w-full mx-auto grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 items-center px-4 py-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-3"
            >
              <ImageContainer
                image={item.image}
                title={item.title}
                imageSize={80}
                containerClassName="bg-[#3F4552] rounded-xl h-[200px] px-2 shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Development;
