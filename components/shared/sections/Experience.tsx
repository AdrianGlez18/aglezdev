import React, { useEffect, useState } from 'react'
import ExperienceCard from '../ExperienceCard';
import { currentExperience } from '@/constants/experience';


const Experience = () => {
    const [entering, setEntering] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setEntering(false), 10);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div className="flex w-full items-center justify-center text-center sections">
            <h2>Experiencia Profesional</h2>
            <div className={`w-full flex flex-col gap-2 items-center justify-center text-center text-typography mb-8 pb-8 md:pt-8 ${(entering) ? 'displace-up-transition' : 'stopped-transition'}`}>
                {
                    currentExperience.es.map((item, index) => (
                        <ExperienceCard key={index} item={item} />
                    ))
                }
            </div>
        </div>

    )
}

export default Experience;