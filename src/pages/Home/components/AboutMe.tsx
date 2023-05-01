import React from 'react'
import Button from 'src/components/Button'
import avatar from 'src/assets/avatar.png'

export default function AboutMe() {
  return (
    <div className='container mb-36 grid grid-cols-12 items-center gap-20'>
      <div className='col-span-7'>
        <h1 className='text-[48px] font-bold'>ABOUT ME</h1>
        <p className='text-[16px]'>
          Hello, I'm Cao Nam, a student majoring in Information Technology. I have experience and passion in the field
          of design, along with perfectionism and high responsibility. I am always willing to learn and share knowledge.
          Looking forward to working and learning with you!
        </p>
        <div className='mb-8 mt-6 grid grid-cols-6 gap-5'>
          <div className='col-span-2'>
            <h1 className='text-[40px] font-bold text-cyan-500'>1.5</h1>
            <p className='text-xs'>
              Year of Experience <p>Graphic Design</p>
            </p>
          </div>
          <div className='col-span-2'>
            <h1 className='text-[40px] font-bold text-cyan-500'>15k +</h1>
            <p className='text-xs'>
              Projects <p>Complete</p>
            </p>
          </div>
          <div className='col-span-2'>
            <h1 className='text-[40px] font-bold text-cyan-500'>20k +</h1>
            <p className='text-xs'>Customer</p>
          </div>
        </div>
        <Button>CONTACT</Button>
      </div>
      <div className='col-span-5 h-[600px] overflow-hidden rounded-full bg-blue-700/0'>
        <img src={avatar} alt='' />
      </div>
    </div>
  )
}
