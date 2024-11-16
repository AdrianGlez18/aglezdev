import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard';
import { projects } from '@/constants/projects';
import Logos from '../Logos';

const About = () => {
    const [entering, setEntering] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setEntering(false), 10);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div className="flex w-full items-center justify-center text-center sections">
            <div className={`flex flex-col gap-4 w-full text-center text-typography mb-4 pb-4 md:pt-3 ${(entering) ? 'displace-up-transition' : 'stopped-transition'}`}>
            <h2>Sobre mí</h2>
                <p>
                    ¡Hola! Mi nombre es Adrián, y soy Ingeniero Informático. Estoy especializado en el sector web (full-stack) y el ámbito financiero. Además, me interesan las áreas innovadoras, desafiantes y con gran potencial de crecimiento. Siempre estoy encantado de aprender nuevos lenguajes, frameworks o tecnologías diferentes.
                </p>
                <h2>Stack Principal</h2>
                {/* <div className="flex gap-4 items-center justify-center max-w-4xl">
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> NextJS </div>
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> React </div>
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> Flutter </div>
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> NodeJS </div>
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> TypeScript </div>
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> TailwindCSS </div>
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> MongoDB </div>
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> SQL </div>
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> Git </div>
                    <div className="text-black bg-buttons p-1 m-2 rounded-full"> Python </div>
                </div> */}
                <Logos/>
            </div>
        </div>

    )
}

export default About