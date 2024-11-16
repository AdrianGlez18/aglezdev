"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/constants/projects'
import { useRouter } from 'next/navigation';
import { FaLink, FaGithub, FaEnvelope, FaHome } from 'react-icons/fa'
import ThemeButton from '../ThemeButton'
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

const ProjectContainer = ({ children, postData }: any) => {
    const index = postData.index;
    let nextProject = projects[index + 1] || projects[0];
    let previousProject = projects[index - 1] || projects[projects.length - 1];
    const gitUrl = postData.github === "" ? undefined : postData.github;
    const linkUrl = postData.url === "" ? undefined : postData.url;

    const [exiting, setExiting] = useState(false);
    const [entering, setEntering] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setEntering(false), 10);
        return () => clearTimeout(timer);
    }, []);


    const handleExit = (url: string) => {
        setExiting(true);
        setTimeout(() => router.push(url), 300);
    };

    return (
        <div className={`flex w-full justify-center items-center mb-8 pb-8 md:pt-8 ${(entering) ? 'displace-left-transition' : 'stopped-transition'}`}>
            <div className={`max-w-4xl rounded-2xl md:m-4 flex items-center justify-center flex-col quiz-div project-container 
                
                ${(exiting) ? 'displace-right-transition' : 'stopped-transition'}`}>
                    <Breadcrumb>
      <BreadcrumbList className="text-typography">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/projects">Proyectos</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{postData.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
                <div className="flex gap-2 items-center justify-center">
                
                    <Link href={`/projects/${previousProject.id}`}
                        passHref
                        className='flex'
                        onClick={(e) => {
                            e.preventDefault();
                            handleExit(`/projects/${previousProject.id}
                        
                    `)
                        }}><button className='text-4xl p-1 hover:scale-125 transition-all'>←</button></Link>
                    <div
                        className='relative bg-black dark:bg-none rounded-full my-5'>
                        <Image src={postData.imageSource} alt={postData.title} className="rounded-full opacity-40 border-white border-4 " height={720} width={1080} />
                        <h1 className='w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg md:text-2xl lg:text-4xl text-white text-center'>{postData.title}</h1>
                    </div>
                    <Link
                        href={`/projects/${nextProject.id}`}
                        passHref
                        className='flex items-center justify-center h-20'
                        onClick={(e) => {
                            e.preventDefault();
                            handleExit(`/projects/${nextProject.id}
                        
                    `)
                        }}>
                        <button className='text-4xl p-1 hover:scale-125 transition-all'>→
                        </button></Link>
                </div>

                <div className='flex gap-8 items-center justify-center'>

                    <Link href="/" onClick={(e) => {
                            e.preventDefault();
                            handleExit('/')
                        }}><FaHome size="2em" title='Home Page'/></Link>
                    {gitUrl && <a href={gitUrl} target="_blank norreferer" aria-label='github repo' title='Github repo'>
                        <FaGithub size="2em" />
                    </a>}
                    {linkUrl && <a href={linkUrl} target="_blank norreferer" aria-label='project link' title='Project link'>
                        <FaLink size="2em" />
                    </a>}
                    <ThemeButton />

                </div>
                <div className="project-main-container">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer