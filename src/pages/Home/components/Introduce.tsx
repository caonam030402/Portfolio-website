import { styles } from 'src/constants/styles'
import Typewriter from 'typewriter-effect'
import photo from '../../../assets/3d-young.png'
import { FaFacebookSquare, FaBehanceSquare, FaInstagramSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Introduce() {
  return (
    <div id='home' className='container flex flex-col items-center justify-between pt-[50px] md:flex-row md:pt-[36px]'>
      <div className='mt-10 flex items-start md:mt-0'>
        {/* <div className='mr-5 flex flex-col items-center'>
          <div className='text- h-3 w-3 rounded-full bg-primary md:h-6 md:w-6'></div>
          <div className='h-[200px] w-1 bg-gradient-to-b from-primary md:h-[300px]'> </div>
        </div> */}
        <div className=''>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            HELLO THERE <span className='text-xl'>👋</span>
          </p>
          <div className='flex gap-2 text-[23px] font-bold text-primary sm:text-[34px] md:gap-3 lg:text-[60px]'>
            <span className='text-gray-400'> I'm</span>
            <Typewriter
              options={{
                loop: true,
                strings: [`Cao Nam`, `Graphic Designer`, `Frontend Developer`],
                autoStart: true,
                devMode: true
              }}
            ></Typewriter>
          </div>
          <h3 className={styles.heroSubText + ' md:w-[80%] lg:mb-5'}>
            is a 3rd year student majoring in information technology and his current job is a Graphic Design.
          </h3>
          <div className='flex items-center gap-3 text-2xl text-primary md:gap-3 md:text-2xl'>
            <h1 className='cursor-pointer text-sm font-bold text-gray-500 dark:text-gray-400'>Follow me</h1>
            <Link className='hover:opacity-80' to='https://www.facebook.com/Mikuuu7'>
              <FaFacebookSquare />
            </Link>
            <Link className='hover:opacity-80' to=''>
              <FaBehanceSquare />
            </Link>
            <Link className='hover:opacity-80' to=''>
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
      </div>
      <img className='amimate w-[85%] md:z-30 md:w-[35%]' src={photo} alt='' />
    </div>
  )
}
