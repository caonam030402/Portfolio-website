import React from 'react'
import Header from './components/Header'
import Introduce from './components/Introduce'
import Project from './components/Project'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skill from './components/Skill'

export default function Home() {
  return (
    <div>
      <div className='w-full bg-cover md:h-[783px]'>
        <Header />
        <Introduce />
      </div>
      <AboutMe />
      <Project />
      <Experience />
      <Skill />
      <Contact />
      <Footer />
    </div>
  )
}
