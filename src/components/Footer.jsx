import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[10vh] bottom-0 left-0 flex justify-between items-center backdrop-blur-xl mt-2 px-6'>
        <h1 className='text-[#e6c364] font-semibold'>Orbital_Dev</h1>

        <p className='text-xs md:text-sm text-slate-400 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>Hala Madrid</p>

        <div className='flex gap-2'>
            <a href='https://linkedin.com/in/mohd-hilal-6b002a346' className='text-xs md:text-sm cursor-pointer text-slate-400 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>LinkedIn</a>
            <a href='https://github.com/mdhilal9153' className='text-xs md:text-sm cursor-pointer text-slate-400 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>Github</a>
            <a href='https://www.instagram.com/mighty_fangx?igsh=MXc1cjF1bW95ajhxcg==' className='text-xs md:text-sm cursor-pointer text-slate-400 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>Instagram</a>
        </div>
    </div>
  )
}

export default Footer
