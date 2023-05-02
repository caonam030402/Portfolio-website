import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import Button from 'src/components/Button'
import { CgMenuLeft } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'

export default function Header() {
  const [isDarkMode, setDarkMode] = React.useState(false)
  const [isOpenMenu, setOpenMenu] = useState(false)

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
  }
  const menu = ['Home', 'Project', 'About', 'Contact']

  const handleOpenMenu = () => {
    setOpenMenu(true)
  }
  const handleCloseMenu = () => {
    setOpenMenu(false)
  }

  return (
    <div className='container flex items-center justify-between py-5'>
      <CgMenuLeft onClick={handleOpenMenu} className='cursor-pointer text-3xl md:hidden' />
      <div className='flex items-center'>
        <div className='md:mr-16'>
          <img src={logo} alt='' />
        </div>
        <div className='flex justify-center gap-14 text-lg '>
          {menu.map((item, index) => (
            <Link className='hidden hover:text-blue-700 md:block' key={index} to=''>
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex items-center'>
        <DarkModeSwitch
          className='md:w-[100px]'
          style={{ color: '#fff' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        />
        <Button withIcon={false} classNameOther='rounded-[8px] md:block hidden'>
          My resume
        </Button>
      </div>
      {isOpenMenu && (
        <div className='md:hidden'>
          <div className='fixed inset-0 bg-blue-700/10 backdrop-blur-sm'></div>
          <div className='z-200 fixed left-[5%] right-[20%] top-[3%] flex h-auto justify-between gap-8 rounded-lg bg-blue-950 p-7'>
            <div className='flex flex-col gap-10'>
              {menu.map((item, index) => (
                <Link className='flex text-xl hover:text-blue-700 md:block' key={index} to=''>
                  {item}
                </Link>
              ))}
              <Button withIcon={false} classNameOther='rounded-md'>
                My resume
              </Button>
            </div>
            <IoMdClose onClick={handleCloseMenu} className='cursor-pointer text-2xl' />
          </div>
        </div>
      )}
    </div>
  )
}
