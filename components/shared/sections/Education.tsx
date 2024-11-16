import React, { useEffect, useState } from 'react'

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