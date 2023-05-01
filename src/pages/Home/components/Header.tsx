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
      <div className='flex justify-center gap-14 text-lg'>
        {menu.map((item, index) => (
          <Link className='hover:text-blue-700' key={index} to=''>
            {item}
          </Link>
        ))}
      </div>
      <DarkModeSwitch
        style={{ color: '#fff', width: '100px' }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  )
}
