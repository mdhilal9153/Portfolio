import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mb-10 bg-[#131318]/10  backdrop-blur-xl w-full fixed top-0 left-0 px-3 py-5 z-50'>
      <div className='head text-[#e6c364] font-extrabold text-2xl z-50'><h1 className='font-headline'>Orbital_Dev</h1></div>
      <div className='hidden md:flex justify-between anc gap-4 z-50'>
        <a href='#mission' className='font-body text-slate-400 hover:text-[#e6c364] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-sm uppercase tracking-wide'>MISSION</a>
        <a href='#tech' className='font-body text-slate-400 hover:text-[#e6c364] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-sm uppercase tracking-wide'>TECH STACK</a>
        <a href='#projects' className='font-body text-slate-400 hover:text-[#e6c364] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-sm uppercase tracking-wide'>PROJECTS</a>
        <a href='#logs' className='font-body text-slate-400 hover:text-[#e6c364] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-sm uppercase tracking-wide'>LOGS</a>
      </div>
      <div>
        <a href='#socials' className='font-body bg-[#e6c364] text-black py-2 px-2'>CONNECT</a>
      </div>
    </div>
  )
}

export default Navbar
