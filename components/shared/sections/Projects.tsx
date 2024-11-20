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