import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard';
import { projects } from '@/constants/projects';
import Logos from '../Logos';

const Education = () => {
    const [entering, setEntering] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setEntering(false), 10);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div className="flex w-full items-center justify-center text-center sections">
            
            <h2>Educacion</h2>

        </div>

    )
}

export default Education