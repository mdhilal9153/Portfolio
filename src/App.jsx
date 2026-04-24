import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>

      <HeroSection/>

      <About/>

      <h1 className='text-2xl md:text-4xl text-white font-bold m-2 ml-6 mt-10 font-headline'>Navigational Logs</h1>
      <Projects/>

      <TechStack/>
      
      <h1 className='text-2xl md:text-4xl text-white font-bold m-2 ml-6 mt-10 font-headline'>Experience</h1>
      <Experience/>

      

      <Contact/>

      <Footer/>
    </div>
  )
}

export default App
