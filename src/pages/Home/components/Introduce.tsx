import { styles } from 'src/constants/styles'
import Typewriter from 'typewriter-effect'
import photo from '../../../assets/3d-young.png'
import { FaFacebookSquare, FaBehanceSquare, FaInstagramSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Introduce() {
  return (
    <div id='home' className='container flex flex-col items-center justify-between pt-[50px] md:flex-row md:pt-[48px]'>
      <div className='mt-14 flex items-start'>
        <div className='mr-5 flex flex-col items-center'>
          <div className='text- h-6 w-6 rounded-full bg-primary'></div>
          <div className='h-[200px] w-1 bg-gradient-to-b from-primary md:h-[300px]'> </div>
        </div>
        <div className=''>
          <p className='text-base text-gray-500 dark:text-gray-400'>XIN CHÀO BẠN {':>'}</p>
          <div className='text-[34px] font-bold text-primary md:text-[68px]'>
            <Typewriter
              options={{
                strings: 'Mình là Cao Nam',
                autoStart: true,
                devMode: true
              }}
            ></Typewriter>
          </div>
          {/* <h1 className={`heroHeadText text-[36px] font-semibold md:text-[68px]`}>
            Mình là <span className='font-extrabold text-primary'>Cao Nam</span>
          </h1> */}
          <h3 className={styles.heroSubText + 'mb-3 md:w-[80%] lg:mb-5'}>
            là một sinh viên năm 3 chuyên ngành công nghệ thông tin và công việc tại của mình là một Graphic Design.
          </h3>
          <div className='flex items-center gap-3 text-2xl text-primary md:gap-3 md:text-2xl'>
            <h1 className='cursor-pointer text-base font-bold text-gray-500 dark:text-gray-400'>Follow mình</h1>
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
      <img className='w-[85%] md:z-30 md:w-[35%]' src={photo} alt='' />
      {/* <img className='absolute right-[5%] top-[60%] z-0 hidden w-[50%]  dark:md:block' src={gradient} alt='' /> */}
    </div>
  )
}
