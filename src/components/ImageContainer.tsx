import React from "react";
import Image from "next/image";

type Work = {
  src: string;
  alt: string;
  label: string;
};

type ImageContainerProps = {
  title: string;
  description?: string;
  image: string;
  work?: Work[];
  imageSize?: number;
  containerClassName?: string;
};

const ImageContainer: React.FC<ImageContainerProps> = ({
  title,
  description,
  image,
  work,
  imageSize = 80,
  containerClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center gap-4 ${containerClassName}`}
    >
      <div className="rounded-lg p-4">
        <Image src={image} alt={title} width={imageSize} height={imageSize} />
      </div>
      <h3 className="title">{title}</h3>
      {description && <p className="description">{description}</p>}
      {work && (
        <div className="flex flex-wrap justify-center gap-2">
          {work.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-xs">
              <Image src={item.src} alt={item.alt} width={40} height={40} />
              <span className="text-white">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
