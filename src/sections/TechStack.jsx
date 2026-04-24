import React from 'react'
import skills from '../data/Skills'
import {motion} from 'framer-motion'

const TechStack = () => {
  return (
    <div className='flex flex-col justify-center w-full gap-5 mb-5' id='tech'>
      <h1 className='font-headline text-2xl md:text-4xl text-white ml-6 font-bold m-2'>Tech<span className='text-[#c9a84c] '>Stack</span></h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-3 md:h-[50vh]'>
        {Object.entries(skills).map(([category,skillset],index) =>(
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            viewport={{ once: true }}>
            <div key={category} className='border-t-2 border-[#c9a84c] text-[#c9a84c] bg-[#111118] p-5 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_15px_rgba(201,168,76,0.15)] hover:shadow-[0_0_15px_rgba(201,168,76,0.4)]'><h3>{category}</h3>
            {skillset.map(skill => (
                <button key={skill} className='border border-[#c9a84c] rounded-xl py-1 px-1.5 text-white m-2 font-body'>{skill}</button>
            ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
