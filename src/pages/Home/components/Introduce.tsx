import Button from 'src/components/Button'
import photo from '../../../assets/coder.png'
import gradient from '../../../assets/gradient.png'

export default function Introduce() {
  return (
    <div className='container mt-16 flex items-center justify-between'>
      <div className='mt-14 flex items-start'>
        <div className='mr-5 flex flex-col items-center'>
          <div className='text- h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500'></div>
          <div className='h-[300px] w-1 bg-gradient-to-b from-teal-500'> </div>
        </div>
        <div className=''>
          <h1 className='text-[64px]'>
            Hi! I’m <span className='font-bold text-cyan-500'>Cao Nam</span>
          </h1>
          <h3 className='mb-5 text-[32px]'>Designer and Software Engineer</h3>
          <Button>My resume</Button>
        </div>
      </div>
      <img className='z-30 w-[45%]' src={photo} alt='' />
      <img className='absolute right-[5%] top-[60%] z-0 w-[50%]' src={gradient} alt='' />
    </div>
  )
}
