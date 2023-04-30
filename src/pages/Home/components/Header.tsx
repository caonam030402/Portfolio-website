import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'

export default function Header() {
  const menu = ['Home', 'Project', 'About', 'Contact']
  return (
    <div className='container flex items-center justify-between py-5'>
      <div>
        <img src={logo} alt='' />
      </div>
      <div className='flex gap-14 text-lg'>
        {menu.map((item, index) => (
          <Link className='hover:text-blue-700' key={index} to=''>
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}
