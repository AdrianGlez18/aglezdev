import Image from 'next/image'
import React from 'react'

const ExperienceCard = ({item}: any) => {
    return (
        <div
            className="flex flex-col rounded-xl bg-secondary text-surface shadow-secondary-1 md:max-w-xl md:flex-row">
           
            <div className="w-full flex content-center justify-center">
            <Image src={item.img} alt={item.title} width={200} height={200} />
            </div>
            <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium">{item.title}</h5>
                <p className="text-xs text-surface/75 dark:text-neutral-300">
                    {item.dates}
                </p>
                <p className="mb-4 text-base">
                    {item.content}
                </p>
                
            </div>
        </div>
    )
}

export default ExperienceCard