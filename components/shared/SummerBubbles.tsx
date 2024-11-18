"use client"

import React, { MutableRefObject, useEffect, useRef } from 'react';
import '@/styles/SummerBubbles.css';

const SummerBubbles = () => {
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const container = containerRef.current;
        const numberOfBubbles = 10;

        for (let i = 0; i < numberOfBubbles; i++) {
            const bubble = document.createElement('div');
            const bubbleTypes = ['/bubble.webp', '/bubble2.webp'];
            bubble.style.backgroundImage = `url(${bubbleTypes[Math.floor(Math.random() * bubbleTypes.length)]})`;

            bubble.classList.add('bubble');
            bubble.style.top = `${Math.random() * 100}vh`;
            bubble.style.animationDuration = `${Math.random() * 15 + 8}s`; 
            bubble.style.animationDelay = `${Math.random() * 8}s`; 
            bubble.style.transform = `rotate(${Math.random() * 360}deg)`; 
            container.appendChild(bubble);
        }
    }, []);

    return <div ref={containerRef} className="summer-bubbles-container bg-primary"></div>;
};

export default SummerBubbles;
