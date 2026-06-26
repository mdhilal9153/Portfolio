import React from 'react'
import ParticleField from '../components/ParticleField'
import {ArrowRight,ArrowDownToLine} from 'lucide-react'
import IcosahedronCanvas from '../components/IcosahedronCanvas'
import {motion} from 'framer-motion'


const HeroSection = () => {
  return (

    <div className='flex justify-center items-center relative min-h-screen gap-6'>
        <ParticleField/>

        <div className='flex flex-col md:flex-row justify-center md:justify-between text-white relative z-10 w-full px-10 py-5'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
              <h1 className='text-8xl font-bold font-headline'>Hilal</h1>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
              <h2 className='text-[#e6c364] text-2xl font-headline'>Driven to innovate.</h2>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}>
              <div className='flex justify-center items-center gap-3'>
                <a href='#projects' className='flex text-black bg-[#e6c364] p-3 font-semibold rounded font-body text-xs md:text-base'>View Projects  <ArrowRight/> </a>
                <a href='/Resume02.pdf' className='flex p-3 font-semibold border border-gray-50 rounded font-body text-xs md:text-base' download>Download Resume <ArrowDownToLine /></a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}>
            <div className='w-full h-[350px] md:w-[500px] md:h-[500px]'>
              <IcosahedronCanvas/>
            </div>
          </motion.div>
        </div>
    </div>
    )
}

export default HeroSection