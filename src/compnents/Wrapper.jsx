import React from 'react'
import '../App.css'

import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Techstack from './techstack/Techstack'
import Projects from './project_caro/Projects'
import Aboutme from './aboutme/Aboutme'
import Connect from './connect/Connect'
import Footer from './footer/Footer'

const Wrapper = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Techstack/>
      <Projects/>
      <Aboutme/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default Wrapper