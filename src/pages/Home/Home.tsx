import React from 'react'
import Header from './components/Header'
import Introduce from './components/Introduce'
import Project from './components/Project'

export default function Home() {
  return (
    <div>
      <div className='h-[783px] bg-pattern bg-cover'>
        <Header />
        <Introduce />
      </div>
      <Project />
    </div>
  )
}
