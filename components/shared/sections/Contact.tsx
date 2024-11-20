import React, { useEffect, useState } from 'react'
import ExperienceCard from '../ExperienceCard';
import { currentExperience } from '@/constants/experience';


const Contact = () => {
    const [entering, setEntering] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setEntering(false), 10);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div className={`flex w-full items-center justify-center text-center sections ${(entering) ? 'displace-up-transition' : 'stopped-transition'}`}>
            <h2>Contacto</h2>
            <p>Para cualquier consulta, oferta, sugerencia o tema que desee tratar, puede contactarme mediante correo electrónico a la siguiente dirección: </p>
            <p>contact@aglez.dev</p>
        </div>

    )
}

export default Contact;