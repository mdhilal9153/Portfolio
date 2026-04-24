import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[10vh] bottom-0 left-0 flex justify-between items-center backdrop-blur-xl mt-2 px-6'>
        <h1 className='text-[#e6c364] font-semibold'>Orbital_Dev</h1>

        <p className='text-slate-400 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>Hala Madrid</p>

        <div className='flex gap-2'>
            <a className='text-sm cursor-pointer text-slate-400 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>Github</a>
            <a className='text-sm cursor-pointer text-slate-400 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>LinkedIn</a>
            <a className='text-sm cursor-pointer text-slate-400 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>Instagram</a>
        </div>
    </div>
  )
}

export default Footer
