import { styles } from 'src/constants/styles'
import photo from '../../../assets/working_7.png'
import Button from 'src/components/Button'

export default function Contact() {
  return (
    <div
      id='contact'
      className='container my-40 grid grid-cols-6 rounded-xl border border-gray-100 bg-gray-50 p-10 dark:border-gray-700 dark:bg-secondaryDark md:gap-20 lg:grid-cols-12'
    >
      <div className='col-span-12 hidden lg:col-span-4 lg:block'>
        <img className='w-[80%] lg:ml-16' src={photo} alt='' />
      </div>
      <div className='col-span-8'>
        <h1 className='mb-2 font-medium text-primary lg:mb-2 lg:text-base'>GET IN TOUCH</h1>
        <h1 className={styles.heroHeadText + ' mb-12'}>Contact</h1>
        <form action=''>
          <div>
            <p className='mb-2 mt-4'>Your Name</p>
            <input
              placeholder='What is your good name ?'
              className='block w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              type='text'
            />
          </div>
          <div>
            <p className='mb-2 mt-4'>Your email</p>
            <input
              className='block w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              placeholder='What your web address ?'
              type='text'
            />
          </div>
          <div>
            <p className='mb-2 mt-4'>Your Message</p>
            <textarea
              className='block h-[200px] w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              placeholder='What you want to say?'
            />
          </div>
          <Button classNameOther='rounded-md mt-5'>Send</Button>
        </form>
      </div>
    </div>
  )
}
