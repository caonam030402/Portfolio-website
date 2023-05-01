import React from 'react'
import Header from './components/Header'
import Introduce from './components/Introduce'
import Project from './components/Project'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <div>
      <div className='h-[783px] bg-pattern bg-cover'>
        <Header />
        <Introduce />
      </div>
      <AboutMe />
      <Project />
      <Experience />
    </div>
  )
}
