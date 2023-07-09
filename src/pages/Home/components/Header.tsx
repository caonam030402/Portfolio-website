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

  useEffect(() => {
    if (active) {
      setOpenMenu(false)
    }
  }, [active])

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
          className='w-[70px] cursor-pointer md:w-[90px] '
          onClick={() => setActive('')}
        >
          <svg
            className='fill-primary dark:fill-white'
            id='Layer_1'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 174.75 86.63'
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n      .cls-1 {\n        font-family: ahn2006-B, ahn2006-B;\n        font-size: 21.45px;\n        letter-spacing: .55em;\n      }\n\n      .cls-1, .cls-2 {\n        \n      }\n    '
                }}
              />
            </defs>
            <g>
              <path
                className='cls-2'
                d='m51.64,9.33c-3.64,0-6.39.79-8.25,2.36l-3.37,3.01-1.72,2.22-1.79-2.29-2.08-1.93c-.86-.81-2.16-1.58-3.91-2.29-1.75-.72-3.58-1.07-5.49-1.07h-14.06v52.6h12.4V24.74c0-1.29.44-2.38,1.33-3.26.88-.88,1.92-1.33,3.12-1.33,1.29,0,2.3.44,3.05,1.33.74.88,1.11,2,1.11,3.33v37.12h12.4V24.81c0-1.34.42-2.45,1.25-3.33.84-.88,1.87-1.33,3.12-1.33s2.25.44,3.15,1.33c.91.88,1.36,1.97,1.36,3.26v37.19h12.4V23.45c0-3.96-1.36-7.31-4.09-10.03-2.73-2.72-6.03-4.08-9.9-4.08Z'
              />
              <rect className='cls-2' x='69.94' y='26.62' width='12.4' height='35.31' />
              <path
                className='cls-2'
                d='m110.78,19.22c0,4.25-1.14,7.21-3.42,8.89-2.23,1.48-4.58,2.22-7.05,2.22l-1.21-.07V10.26h-12.4v51.67h12.4v-21.14h1.71c2.94,0,5.34,1,7.19,3.01s2.78,4.59,2.78,7.74v10.39h12.4v-13.54c0-5.78-3.34-10.01-10.03-12.68,6.69-2.63,10.03-7.12,10.03-13.47v-11.97h-12.4v8.96Z'
              />
              <path
                className='cls-2'
                d='m152.2,10.26v35.69c0,1.82-.62,3.31-1.86,4.48-1.24,1.17-2.75,1.76-4.52,1.76s-3.37-.57-4.66-1.72c-1.24-1.24-1.86-2.65-1.86-4.23V10.26h-12.4v34.76c0,5.16,1.79,9.44,5.38,12.83,3.58,3.39,8.07,5.09,13.47,5.09h18.85V10.26h-12.4Z'
              />
              <rect className='cls-2' x='69.94' y='10.26' width='12.4' height='12.4' />
            </g>
            <text className='cls-1' transform='translate(11.28 86.63)'>
              <tspan x={0} y={0}>
                Endeavor
              </tspan>
            </text>
          </svg>
        </Link>
      </div>
      <div className='flex items-center'>
        <div className='flex justify-center gap-14 text-sm font-[600]'>
          {menuData.map((item) => (
            <Link
              className={
                active === item.name ? 'hidden text-primary' : '' + 'hidden cursor-pointer hover:text-primary md:block'
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
                <Link
                  className={active === item.name ? 'text-primary' : '' + ' flex text-sm hover:text-primary md:block'}
                  key={item.id}
                  to={item.id}
                  onClick={() => setActive(item.name)}
                >
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
