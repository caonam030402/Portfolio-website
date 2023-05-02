import Pagination from 'src/components/Pagination'
import { projectData } from 'src/constants/data'

export default function Project() {
  return (
    <div className='container my-[25px] text-center'>
      <h1 className='text-[48px] font-bold'>PROJECT</h1>
      <p className='text-[16px]'>These are some of my products in the process of studying and working.</p>
      <div className='mt-8 flex justify-center gap-5'>
        <button className='w-[100px] rounded-lg bg-cyan-500 py-1'>All</button>
        <button className='w-[100px] rounded-lg border-[1px] border-cyan-500 py-1'>Design</button>
        <button className='w-[100px] rounded-lg border-[1px] border-cyan-500 py-1'>Web</button>
      </div>
      <div className='mb-10 mt-10 grid grid-cols-12 gap-6'>
        {projectData.map((item, index) => (
          <div
            className='col-span-12 rounded-xl bg-blue-700/25 p-[20px] text-left sm:col-span-6 md:col-span-4'
            key={index}
          >
            <div className='h-[200px]'>
              <img className='h-[100%] w-[100%]' src={item.image} alt='' />
            </div>
            <h1 className='mt-3 text-[24px] font-bold'>{item.name}</h1>
            <p className='mt-2 text-[14px]'>{item.description}</p>
            <div className='mt-3 flex gap-2'>
              {item.hashtag.map((item, index) => (
                <div className='text-cyan-500' key={index}>
                  #{item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  )
}
