import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function Header() {
  const [isDarkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
  }
  const menu = ['Home', 'Project', 'About', 'Contact']
  return (
    <div className='container flex items-center justify-between py-5'>
      <div>
        <img src={logo} alt='' />
      </div>
      <div className='flex justify-center gap-14 text-lg '>
        {menu.map((item, index) => (
          <Link className='hidden hover:text-blue-700 md:block' key={index} to=''>
            {item}
          </Link>
        ))}
      </div>
      <DarkModeSwitch
        className='md:w-[100px]'
        style={{ color: '#fff' }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  )
}
