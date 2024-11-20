"use client"

import "@/styles/globals.css";
import React, { useState } from "react";
import '@/styles/FallingLeaves.css';
import Footer from "@/components/shared/layout/Footer";
import Header from "@/components/shared/layout/Header";
import Projects from "@/components/shared/sections/Projects";
import About from "@/components/shared/sections/About";
import Experience from "@/components/shared/sections/Experience";
import Education from "@/components/shared/sections/Education";
import Contact from "@/components/shared/sections/Contact";

const sectionMap = {
  "/about": <About />,
  "/projects": <Projects />,
  "/experience": <Experience />,
  "/education": <Education/>,
  "/contact": <Contact/>
}

export default function Home() {

  const [currentSection, setCurrentSection] = useState("/about");

  return (

    <div className="flex w-full gap-8 items-center justify-items-center min-h-screen m-4 p-8 pb-20 overflow-hidden">
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
        {
          sectionMap[currentSection as keyof typeof sectionMap]
        }
        <Footer />
      </div>

    </div>
  );
}
