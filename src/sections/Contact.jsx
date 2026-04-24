import React from 'react'
import {Mail,Box,SquareTerminal} from 'lucide-react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div id='logs' className='w-full flex flex-col gap-10 justify-center items-center mt-5 p-5 h-[400px] bg-[#131315]'>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView ={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}>
        <div className='text-center leading-loose'>
          <h1 className='text-white text-3xl md:text-5xl font-headline font-semibold'>Let's build something!</h1>

          <p className='text-white/50 font-body'>Seeking 2026 Summer Internship opportunities. Ready to bring fresh technical perspectives and a drive for excellence to your mission-critical team.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView ={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}>
        <div className='flex justify-center items-center gap-10' id='socials'>

          <a href='mailto:mdhilal123098@gmail.com' className='p-2 bg-[#2a292f] text-white rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#c9a84c] hover:text-black'><Mail/></a>

          <a href='https://linkedin.com/in/mohd-hilal-6b002a346' className='p-2 bg-[#2a292f] text-white rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#c9a84c] hover:text-black'><Box/></a>

          <a href='https://github.com/mdhilal9153' className='p-2 bg-[#2a292f] text-white rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#c9a84c] hover:text-black'><SquareTerminal/></a>

        </div>
      </motion.div>
    </div>
  )
}

export default Contact
