"use client";

import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Connect from "@/components/Connect";
import Work from "@/components/Work";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col items-center w-full">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#800020",
        }}
      />
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

      {/* <section id="about"> */}
      <Work />
      {/* </section> */}

      <div className="w-full flex justify-center py-[52px]">
        <div className="h-[4px] w-full max-w-[1209px] bg-tertiary/80" />
      </div>

      <section id="project">
        <Project />
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
