import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'

export default function Footer() {
  return (
    <footer className='bg-white shadow dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a href='https://flowbite.com/' className='mb-4 flex items-center text-2xl font-bold text-primary sm:mb-0'>
            CaoNam
          </a>
          <ul className='mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0'>
            <li>
              <Link to='#' className='mr-4 hover:underline md:mr-6 '>
                Home
              </Link>
            </li>
            <li>
              <Link to='#' className='mr-4 hover:underline md:mr-6'>
                Project
              </Link>
            </li>
            <li>
              <Link to='#' className='mr-4 hover:underline md:mr-6 '>
                About
              </Link>
            </li>
            <li>
              <Link to='#' className='hover:underline'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          © 2023 Caonam™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
