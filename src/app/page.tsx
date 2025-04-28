import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />

      <div className="w-full flex justify-center py-[52px]">
        <div className="h-[4px] w-full max-w-[1209px] bg-tertiary/80" />
      </div>

      <About />
      <div className="w-full flex justify-center py-[52px]">
        <div className="h-[4px] w-full max-w-[1209px] bg-tertiary/80" />
      </div>

      <Project />
      <div className="w-full flex justify-center py-[52px]">
        <div className="h-[4px] w-full max-w-[1209px] bg-tertiary/80" />
      </div>

      <Connect />
    </div>
  );
}
