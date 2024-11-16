"use client"

import React, { useEffect, useRef } from 'react';
import '@/styles/FallingLeaves.css';

const Sakura = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const numberOfLeaves = 60; // Número de hojas que deseas mostrar

        for (let i = 0; i < numberOfLeaves; i++) {
            const leaf = document.createElement('div');
            const leafTypes = ['/sakura.png', '/sakura2.png', '/sakura3.png', '/sakura4.png'];
            leaf.style.backgroundImage = `url(${leafTypes[Math.floor(Math.random() * leafTypes.length)]})`;

            leaf.classList.add('leaf');
            leaf.style.left = `${Math.random() * 100}vw`;
            leaf.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración aleatoria entre 5-10s
            leaf.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio
            leaf.style.transform = `rotate(${Math.random() * 360}deg)`; // Rotación inicial aleatoria
            container.appendChild(leaf);
        }
    }, []);

    return <div ref={containerRef} className="falling-leaves-container bg-primary"></div>;
};

export default Sakura;
