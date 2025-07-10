"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MessageButton() {
  const [isAboveFooter, setIsAboveFooter] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboveFooter(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <div
      className={`fixed right-4 z-50 transition-all duration-300 ${
        isAboveFooter ? "bottom-4" : "bottom-[calc(100vh-100px)]"
      }`}
    >
      <button className="bg-blue-600 p-1 rounded-full shadow-lg hover:bg-blue-700">
        <Image 
            src="/icon/message.svg"
            alt="Message"
            height={45}
            width={45}
        />
      </button>
    </div>
  );
}
