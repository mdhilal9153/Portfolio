import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'

const ParticleField = () => {
    const canvasRef = useRef(null);
    const particleArr = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        particleArr.current = Array.from({ length: 80 }, () => ({
            x: 0 + Math.random() * canvas.width,
            y: 0 + Math.random() * canvas.height,
            radius: 0.5 + Math.random() * 1.5,
            opacity: 0.1 + Math.random() * 0.4,
            speedX: -0.2 + Math.random() * 0.4,
            speedY: -0.2 + Math.random() * 0.4
        }))

        
        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particleArr.current.forEach(
                e => {
                    ctx.beginPath()
                    ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2)
                    ctx.fillStyle = `rgba(230, 195, 100, ${e.opacity})`
                    ctx.fill()

                    e.x += e.speedX;
                    e.y += e.speedY;

                    if(e.x<0){
                        e.x=canvas.width;
                    } else if(e.x>canvas.width){
                        e.x=0;
                    }

                    if(e.y<0){
                        e.y=canvas.height;
                    }else if(e.y>canvas.height){
                        e.y=0;
                    }
                }
            )
        }

        gsap.ticker.add(drawParticles);

        return () => {
            gsap.ticker.remove(drawParticles)
        }

    }, []);

    return (
        <canvas ref={canvasRef} className='absolute z-0 h-full w-full'/>
    );
};

export default ParticleField;