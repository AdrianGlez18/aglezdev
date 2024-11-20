"use client";

import { navLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars } from 'react-icons/fa'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import ThemeButton from '../ThemeButton';
//import LangButton from './LangButton';

{/* <header className='shadow-sm py-5 z-50 bg-white dark:bg-black w-[100vw] overflow-hidden'> */ }
const Header = ({ currentSection, setCurrentSection }: { currentSection: string, setCurrentSection: React.Dispatch<React.SetStateAction<string>> }) => {
    console.log(currentSection)

    return (

        <header className='flex flex-col gap-4 items-center justify-around min-h-[40vh]'>
            {/* <Link href="/" className="flex items-center gap-2 md:py-2">
                <span className='text-gray-800 font-bold ml-3 font-[family-name:var(--font-geist-sans)]'>AGLEZDEV</span>
            </Link> */}
            <Link href={'/'}>
                <Image
                    src="/panda-light-min-200.webp"
                    alt="Profile image"
                    width={150}
                    height={150}
                />
            </Link>
            <h2 className='text-center text-xl font-bold'>Adrián González</h2>
            <div className='flex gap-8 items-center justify-center'>

                <a href="https://www.linkedin.com/in/adri%C3%A1n-gonz%C3%A1lez-hern%C3%A1ndez/" target="_blank norreferer" /* onClick={handleLinkedinClick} */><FaLinkedin size="2em" /></a>
                <a href="https://github.com/AdrianGlez18" target="_blank norreferer" /* onClick={handleGithubClick} */><FaGithub size="2em" /></a>
                <a href="mailto:contact@aglez.dev" target="_blank norreferer"><FaEnvelope size="2em" /></a>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger><FaBars size="2em" /></SheetTrigger>
                        <SheetContent className='bg-primary'>
                            <SheetHeader>
                                <SheetTitle>Web Sections</SheetTitle>
                                <SheetDescription>
                                    <ul className="flex flex-col size-full items-center justify-center gap-4">
                                        {
                                            navLinks.slice(0, 6).map((link) => {
                                                const isActive = link.href === currentSection
                                                return (
                                                    <li onClick={() => setCurrentSection(link.href)} key={link.href} className={` group cursor-pointer my-1 ${isActive ? 'bg-purple-gradient text-typography rounded-full' : 'text-gray-700 dark:text-gray-100'
                                                        }`}>
                                                        {link.label}
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>


                <ThemeButton />

            </div>
            <nav className="gap-4 mx-5 my-1 font-[family-name:var(--font-geist-mono)] hidden md:flex">
                <ul className="flex size-full items-center justify-center gap-4">
                    {
                        navLinks.slice(0, 6).map((link) => {
                            const isActive = link.href === currentSection
                            return (
                                <li onClick={() => setCurrentSection(link.href)} key={link.href} className={` group cursor-pointer ${isActive ? 'bg-buttons py-2 px-4 text-typography rounded-full' : 'text-gray-700 dark:text-gray-100'
                                    }`}>
                                    {/*                                     <Link className='header-link' href={link.href}>
                                        {link.label}
                                    </Link> */}
                                    {link.label}
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
            {/* <p>Software Engineer - Web / Databases / Mobile</p> */}



        </header >
    )
}

export default Header