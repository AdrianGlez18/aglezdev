import React, { useEffect, useState } from 'react'

const Education = () => {
    const [entering, setEntering] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setEntering(false), 10);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div className={`flex w-full items-center justify-center text-center sections ${(entering) ? 'displace-up-transition' : 'stopped-transition'}`}>
            <h2>Formación universitaria</h2>
            <h3>Graduado en Ingeniería Informática con mención en tecnologías de la información</h3>
            <h2>Idiomas</h2>
            <ul>
                <li>Español - Nativo</li>
                <li>Inglés - Avanzado - C1</li>
                <li>Francés - Intermedio - B1</li>
                <li>Japonés - Básico - N5/N4</li>
            </ul>

        </div>

    )
}

export default Education