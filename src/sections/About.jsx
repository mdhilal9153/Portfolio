import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

const About = () => {
  const ringRef = useRef()

  useEffect(() => {
    gsap.to(ringRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: 'none'
    })
  }, [])

  return (
    <div className='bg-[#0f0f14] m-2 flex flex-col md:flex-row justify-between items-center px-10 py-20 h-full' id='mission'>
      <motion.div className='w-full md:w-1/2 '
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className=' flex justify-center items-center relative gap-5'>
          <img src='/Photo.png' className='w-[200px] h-[200px] md:h-[280px] md:w-[300px] relative z-10 rounded-xl'/>
          <div className='absolute rounded-xl border-2 border-[#e6c364]/50 w-[220px] h-[225px] md:w-[340px] md:h-[340px] z-0' ref={ringRef}>
          <div className='absolute rounded-full w-5 h-5 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e6c364]'>
          </div>

          </div>
        </div>
      </motion.div>

      <motion.div className='w-full md:w-1/2'
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className=''>
          <h1 className='text-white text-3xl md:text-5xl font-semibold mb-7 mt-11 font-headline'>Engineering <span className='text-[#e6c364]'>Elegance</span> in the Void</h1>

          <p className='leading-loose text-white mb-7 font-semibold font-body text-xs md:text-base'>I write code that ships, not just code that works. A full-stack developer in my 2nd year at JEMTEC, I build end-to-end systems where the backend is solid and the frontend doesn't lie about it. Innovation isn't a buzzword for me — it's the reason I open my laptop.<br/> Currently hunting for a production environment where I can break things, fix them faster, and learn what no classroom teaches.</p>

          <p className='text-[#e6c364]'></p>
        </div>
      </motion.div>
    </div>
  )
}

export default About
