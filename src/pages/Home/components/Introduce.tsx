import photo from '../../../assets/coder.png'
import gradient from '../../../assets/gradient.png'
import { FaFacebookSquare, FaBehanceSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Introduce() {
  return (
    <div className='container flex flex-col items-center justify-between pt-[50px] md:flex-row md:pt-[130px]'>
      <div className='mt-14 flex items-start'>
        <div className='mr-5 flex flex-col items-center'>
          <div className='text- h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500'></div>
          <div className='h-[200px] w-1 bg-gradient-to-b from-teal-500 md:h-[300px]'> </div>
        </div>
        <div className=''>
          <p className='text-lg'>Xin chào các bạn</p>
          <h1 className='text-[36px] md:text-[50px]'>
            Mình là <span className='font-bold text-cyan-500'>Cao Nam</span>
          </h1>
          <h3 className='mb-5 w-[80%] text-[17px] md:text-[20px]'>
            là một Designer và đang là sinh viên năm 3 chuyên ngành Công nghệ thông tin.
          </h3>
          <div className='flex items-center gap-3 text-2xl text-cyan-500 md:gap-3 md:text-2xl'>
            <h1 className='text-base'>Follow mình</h1>
            <FaFacebookSquare />
            <FaBehanceSquare />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
      <img className='w-[85%] md:z-30 md:w-[45%]' src={photo} alt='' />
      <img className='absolute right-[5%] top-[60%] z-0 hidden w-[50%]  dark:md:block' src={gradient} alt='' />
    </div>
  )
}
