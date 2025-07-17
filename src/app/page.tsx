"use client";

import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Development from "@/components/Development";
import Project from "@/components/Project";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="about">
        <HowItWorks />
      </section>

      <section id="about">
        <Development />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="service">
        <Services />
      </section>
    </div>
  );
}
