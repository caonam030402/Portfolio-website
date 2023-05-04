import Pagination from 'src/components/Pagination'
import { projectData } from 'src/constants/data'
import { styles } from 'src/constants/styles'

export default function Project() {
  return (
    <div className='container my-[25px] text-center'>
      <h1 className={styles.heroHeadText}>Project</h1>
      <p className={styles.heroSubText}>Đây là một số sản phẩm trong quá trình học tập và làm việc của mình.</p>
      {/* <div className='mt-8 flex justify-center gap-5 font-semibold'>
        <button className='w-[100px] rounded-lg bg-cyan-500 py-1'>All</button>
        <button className='w-[100px] rounded-lg border-[1px] border-cyan-500 py-1'>Design</button>
        <button className='w-[100px] rounded-lg border-[1px] border-cyan-500 py-1'>Web</button>
      </div> */}
      {/* <div className='mb-10 mt-10 grid grid-cols-12 gap-6'>
        {projectData.map((item, index) => (
          <div
            className='col-span-12 rounded-xl bg-blue-700/25 p-[20px] text-left sm:col-span-6 md:col-span-4'
            key={index}
          >
            <div className='h-[200px] w-[100%]'>
              <img className='h-full w-full rounded-lg object-cover' src={item.image} alt='' />
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
      <Pagination /> */}
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}
