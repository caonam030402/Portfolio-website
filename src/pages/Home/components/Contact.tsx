import React from 'react'
import Button from 'src/components/Button'

export default function Contact() {
  return (
    <div className='container my-40 grid grid-cols-6 rounded-xl bg-secondaryDark p-10 md:gap-20 lg:grid-cols-12'>
      <div className='col-span-6'>
        <h1 className='text-[48px] font-bold'>Connect with me</h1>
        <p>
          I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in
          social media or simply complete the enquiry form.
        </p>
      </div>
      <div className='col-span-6'>
        <h1 className='text-[24px] font-bold'>Send me a message</h1>
        <form action=''>
          <div>
            <p className='mb-2 mt-4'>Your Name</p>
            <input
              placeholder='What is your good name ?'
              className='w-full rounded-md bg-blue-700/30 p-3 outline-none'
              type='text'
            />
          </div>
          <div>
            <p className='mb-2 mt-4'>Your email</p>
            <input
              className='w-full rounded-md bg-blue-700/30 p-3 outline-none'
              placeholder='What your web address ?'
              type='text'
            />
          </div>
          <div>
            <p className='mb-2 mt-4'>Your Message</p>
            <textarea
              className='h-[200px] w-full rounded-md bg-blue-700/30 p-3 outline-none'
              placeholder='What you want to say?'
            />
          </div>
          <Button classNameOther='rounded-md mt-5'>Send</Button>
        </form>
      </div>
    </div>
  )
}
