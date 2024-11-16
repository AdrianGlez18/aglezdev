import React, { useEffect, useState } from 'react'
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
                <Logos />
            </div>
        </div>

    )
}

export default About