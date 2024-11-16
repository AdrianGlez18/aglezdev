
import React from 'react'
import { projects } from '@/constants/projects'
import { redirect } from 'next/navigation';
import MHDB from '@/posts/mdx/mhdb.mdx'
import ReactViteAuth from '@/posts/mdx/react-vite-auth.mdx'
import Spainary from '@/posts/mdx/spainary.mdx'
import JTIApp from '@/posts/mdx/jtiapp.mdx'
import JTIWeb from '@/posts/mdx/jtiweb.mdx'
import ProjectContainer from '@/components/shared/layout/ProjectContainer';

const renderPost =  {
    "mhdb": <MHDB/>,
    "react-vite-auth": <ReactViteAuth/>,
    "spainary": <Spainary/>,
    "jtiweb": <JTIWeb/>,
    "jtiapp": <JTIApp/>
}

const ProjectDetails = ({ params }: any) => {

    const id = params.id;

    const prjs = projects.filter((e) => e.id === id);

    if (prjs.length === 0) {
        console.log("not found")
        redirect("/404")
    }

    const item = prjs[0];
    

    return (
        <ProjectContainer postData={projects[item.index]}>
            {renderPost[id]}
        </ProjectContainer>
    )
}

export default ProjectDetails
