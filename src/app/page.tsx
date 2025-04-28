import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <div className="w-full max-w-[1440px] py-[52px]">
        <div className="h-[4px] w-full bg-tertiary/80" />
      </div>
      <About />
    </div>
  );
}
