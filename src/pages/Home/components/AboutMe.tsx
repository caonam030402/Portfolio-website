import Button from 'src/components/Button'
import avatar from 'src/assets/avatar.png'
import { styles } from 'src/constants/styles'

export default function AboutMe() {
  return (
    <div id='about' className='container mb-36 grid grid-cols-7 items-center md:gap-20 lg:grid-cols-12'>
      <div className='col-span-7 mt-20 md:mt-0'>
        <h1 className='font-medium text-primary lg:text-base'>INTRODUCTION</h1>
        <h1 className={styles.heroHeadText}>About Me</h1>
        <p className={styles.sectionSubText + ' lg:mb-8'}>
          Hi, I am Cao Nam a 3rd year student majoring in Information Technology.During my time working part-time and
          freelancing, I have accumulated 2 years of experience in the field of Graphic Designer.Currently, I am
          interested and oriented to become a website developer.I believe that perseverance and relentless effort will
          help me achieve my goals.
        </p>
        {/* <div className='mb-8 mt-6 grid grid-cols-6 gap-5'>
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
        </div> */}
        <Button>CONTACT</Button>
      </div>
      <div className='col-span-7 h-[100%] overflow-hidden rounded-full bg-blue-700/0 lg:col-span-5'>
        <img src={avatar} alt='' />
      </div>
    </div>
  )
}
