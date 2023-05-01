import React from 'react'
import Header from './components/Header'
import Introduce from './components/Introduce'
import Project from './components/Project'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <div className='bg-pattern bg-cover md:h-[783px]'>
        <Header />
        <Introduce />
      </div>
      <AboutMe />
      <Project />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  )
}
