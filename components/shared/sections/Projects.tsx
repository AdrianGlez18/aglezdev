"use client";


import { useState, useEffect } from "react";
import ProjectsCarousel from "../ProjectsCarousel";


const Projects = () => {

    const [entering, setEntering] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setEntering(false), 10);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div className={`${(entering) ? 'displace-up-transition' : 'stopped-transition'}`}>
            <ProjectsCarousel />
        </div>

    )
}


export default Projects;

{/* <Head>
                    <title>Aglez Dev - Projects </title>
                    <meta name="description" content="Section to see all my ongoing and finished code projects." />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="twitter:title" content="AglezDev" />
                    <meta property="og:title" content="AglezDev" />
                    <meta property="og:image" content="/og.png" />
                    <meta property="og:description" content="Section to see all my ongoing and finished code projects." />
                    <meta property="og:url" content="https://aglez.dev" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head> */}