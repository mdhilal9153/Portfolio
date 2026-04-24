import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Starsbg from '../components/Starsbg'
import {motion} from 'framer-motion'

const Experience = () => {
    const rocketRef = useRef()

    useEffect(() => {
        gsap.to(rocketRef.current, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        })
    }, [])

  return (
    <div className='relative flex flex-col justify-center items-center gap-5 min-h-[70vh] mt-5'>
        <Starsbg/>

        <div className='relative flex flex-col justify-center items-center gap-5'>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}><img ref={rocketRef} src='/rocket-svgrepo-com.svg' className='h-[120px] w-[120px] md:h-[200px] md:w-[200px]'/>
                
            </motion.div>


            <motion.div className='text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}>
                <h1 className='text-4xl text-[#c9a84c] font-semibold font-headline'>Loading...</h1>

                <p className='text-[#a79e90] text-xl font-medium font-body'><i>Reach out if my projects got you</i></p>
            </motion.div>

        </div>
      
    </div>
  )
}

export default Experience 
