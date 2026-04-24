import React from 'react'
import projects from '../data/projects'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='w-full flex flex-row flex-nowrap overflow-x-auto gap-6 py-6 px-10' id='projects'>
        {projects.map((project,index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true }}>
              <div key={project.title} className='flex flex-col justify-center bg-[#111118] border-t-2 border-[#c9a84c] w-[250px] h-[380px] px-3 pt-4 pb-2 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_-15px_30px_-5px_rgba(201,168,76,0.15)] hover:shadow-[0_-15px_35px_-2px_rgba(201,168,76,0.4)] hover:shadow-[0_-15px_35px_-2px_rgba(201,168,76,0.4)]'>

                  <h1 className='font-headline text-white text-2xl font-semibold mb-3 h-16 line-clamp-2'>{project.title}</h1>
                  <p className='text-white/50 text-sm line-clamp-2 mb-3 h-10 font-body'>{project.description}</p>

                  <div className='flex-1'>
                    {project.techStack.map((tech,index) =>(
                    <button key={index} className='rounded-xl border border-[#c9a84c] text-[#c9a84c] p-2 text-sm m-1.5 font-body'>{tech}</button>
                    ))}
                  </div>

                  <div className='flex justify-between gap-2 bottom-0 mt-3'>
                    {project.liveUrl!=="" && (
                      <a href={project.liveUrl} className='w-1/2 text-center py-1.5 px-2 font-body rounded bg-[#c9a84c] text-black hover:scale-95 hover:shadow-[0_8px_20px_-2px_rgba(201,168,76,0.4)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>Live Demo</a>
                    )}
                    <a href={project.githubUrl} className='w-1/2 text-center py-1.5 px-2 font-body rounded border border-[#c9a84c] text-[#c9a84c] hover:scale-95 hover:shadow-[0_0_12px_rgba(201,168,76,0.2)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>Github</a>
                  </div>

              </div>
            </motion.div>
        ))}
      
    </div>
  )
}

export default Projects
