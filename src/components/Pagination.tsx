import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Pagination() {
  return (
    <div className='flex justify-center gap-4'>
      <button className='flex h-10 w-10 items-center justify-center rounded-md bg-gray-600/25 text-2xl'>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <button className='h-10 w-10 rounded-md border-[1px] border-blue-700 bg-blue-700/25'>1</button>
      <button className='h-10 w-10 rounded-md bg-blue-700/25'>2</button>
      <button className='h-10 w-10 rounded-md bg-blue-700/25'>3</button>
      <button className='h-10 w-10 rounded-md bg-blue-700/25'>4</button>
      <button className='h-10 w-10 rounded-md bg-blue-700/25'>5</button>
      <button className='flex h-10 w-10 items-center justify-center rounded-md bg-blue-700/25 text-2xl'>
        <MdKeyboardArrowRight />
      </button>
    </div>
  )
}
