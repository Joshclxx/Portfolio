"use client";

import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Connect from "@/components/Connect";
import Work from "@/components/Work";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <section id="hero">
        <Hero />
      </section>

      <div className="w-full flex justify-center py-[52px]">
        <div className="h-[4px] w-full max-w-[1209px] bg-tertiary/80" />
      </div>

      <section id="about">
        <About />
      </section>

      <div className="w-full flex justify-center py-[52px]">
        <div className="h-[4px] w-full max-w-[1209px] bg-tertiary/80" />
      </div>

      <section id="work">
        <Work />
      </section>

      <div className="w-full flex justify-center py-[52px]">
        <div className="h-[4px] w-full max-w-[1209px] bg-tertiary/80" />
      </div>

      <section id="project">
        <Project />
      </section>

      <div className="w-full flex justify-center py-[52px]">
        <div className="h-[4px] w-full max-w-[1209px] bg-tertiary/80" />
      </div>

      <section id="service">
        <Service />
      </section>

      <div className="w-full flex justify-center py-[52px]">
        <div className="h-[4px] w-full max-w-[1209px] bg-tertiary/80" />
      </div>

      <section id="connect" className="w-full">
        <Connect />
      </section>
    </div>
  );
}
