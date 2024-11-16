"use client"

import "@/styles/globals.css";
import React, { useState } from "react";
import Snowfall from "react-snowfall";
import '@/styles/FallingLeaves.css';
import { useRecoilState } from 'recoil';
import { localeState, themeState, themeType } from '@/lib/recoilStates';
import FallingLeaves from "@/components/shared/FallingLeaves";
import Sakura from "@/components/shared/Sakura";
import Footer from "@/components/shared/layout/Footer";
import Header from "@/components/shared/layout/Header";
import Projects from "@/components/shared/sections/Projects";
import About from "@/components/shared/sections/About";
import RenderThemeSfx from "@/components/shared/layout/RenderThemeSfx";
import Experience from "@/components/shared/sections/Experience";

const sectionMap = {
  "/about": <About />,
  "/projects": <Projects />,
  "/experience": <Experience />
}

export default function Home() {

  /* const containerRef = useRef(null); */
  //const defaultTheme: themeType = "fall"
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const [currentSection, setCurrentSection] = useState("/about");
  console.log(currentTheme)

  return (

    <div className="flex w-full gap-8 items-center justify-items-center min-h-screen m-4 p-8 pb-20 overflow-hidden">
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
        {
          sectionMap[currentSection]
        }
        <Footer />
      </div>

    </div>
  );
}




{/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 text-typography">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex">
        
          <ThemeButton/>
        <button className='py-2 px-8 bg-buttons text-typography m-2' onClick={() => changeTheme("spring")}>Spring</button>
      <button className='py-2 px-8 bg-buttons text-typography m-2' onClick={() => changeTheme("summer")}>Summer</button>
      <button className='py-2 px-8 bg-buttons text-typography m-2' onClick={() => changeTheme("fall")}>Fall</button>
      <button className='py-2 px-8 bg-buttons text-typography m-2' onClick={() => changeTheme("winter")}>Winter</button>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main> */}