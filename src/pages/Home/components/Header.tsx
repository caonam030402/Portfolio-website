import React, { useState, useEffect } from 'react'
import logo from '../../../assets/logo.png'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import Button from 'src/components/Button'
import { CgMenuLeft } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'
import useDarkMode from 'src/hooks/useDarkMode'
import { menuData } from 'src/constants/data'
import { Link } from 'react-scroll'

export default function Header() {
  const { colorTheme, setTheme } = useDarkMode()
  const [isOpenMenu, setOpenMenu] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const updatePosition = () => {
      if (window.pageYOffset > 0) {
        if (!isOpenMenu) {
          setIsScroll(true)
        } else {
          setIsScroll(false)
        }
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [isOpenMenu])

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  const handleOpenMenu = () => {
    setOpenMenu(true)
  }
  const handleCloseMenu = () => {
    setOpenMenu(false)
  }

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-40 flex items-center justify-between py-5 ${
        isScroll
          ? 'border-b border-gray-200 px-4 backdrop-blur-sm transition-shadow dark:border-gray-600 dark:bg-backgroundDark xl:px-[136px]'
          : 'container bg-[#050816] bg-transparent'
      }`}
    >
      <CgMenuLeft onClick={handleOpenMenu} className='cursor-pointer text-3xl md:hidden' />
      <div className='flex items-center'>
        <Link
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          to='home'
          className='w-32 cursor-pointer md:mr-16'
        >
          <img className='' src={logo} alt='' />
        </Link>
      </div>
      <div className='flex items-center'>
        <div className='flex justify-center gap-14 text-sm font-[600]'>
          {menuData.map((item) => (
            <Link
              className={
                active === item.name ? 'text-primary' : '' + 'hidden cursor-pointer hover:text-primary md:block'
              }
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <DarkModeSwitch className='md:w-[100px]' checked={darkSide} onChange={toggleDarkMode} size={25} />
        <Button withIcon={false} classNameOther='rounded-[8px] md:block hidden'>
          My resume
        </Button>
      </div>
      {isOpenMenu && (
        <div className='md:hidden'>
          <button
            onClick={handleCloseMenu}
            className='fixed inset-0 bg-slate-200/25 backdrop-blur-sm dark:bg-blue-700/10'
          ></button>
          <div className='z-200 fixed left-[5%] right-[20%] top-[3%] flex h-auto justify-between gap-8 rounded-lg bg-white p-7 shadow-lg dark:bg-secondaryDark'>
            <div className='flex flex-col gap-8'>
              {menuData.map((item) => (
                <Link className='flex text-sm hover:text-primary md:block' key={item.id} to={item.id}>
                  {item.name}
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
