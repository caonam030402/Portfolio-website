import Button from 'src/components/Button'
import avatar from 'src/assets/avatar.png'

export default function AboutMe() {
  return (
    <div className='container mb-36 grid grid-cols-7 items-center md:gap-20 lg:grid-cols-12'>
      <div className='col-span-7 mt-20 md:mt-0'>
        <h1 className='mb-4 text-[40px] font-bold'>MÌNH LÀ AI ?</h1>
        <p className='text-base'>
          Chào bạn, tôi là Cao Nam - một sinh viên năm 3 chuyên ngành Công nghệ thông tin. Trong thời gian làm việc
          part-time và freelance, tôi đã tích lũy được 2 năm kinh nghiệm trong lĩnh vực Graphic Designer. Hiện tại, tôi
          đang quan tâm và có định hướng trở thành một nhà phát triển website. Tôi tin tưởng vào sự kiên trì và nỗ lực
          không ngừng nghỉ sẽ giúp tôi đạt được mục tiêu của mình.
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
      <div className='col-span-7 h-[100%] overflow-hidden rounded-full bg-blue-700/0 lg:col-span-5'>
        <img src={avatar} alt='' />
      </div>
    </div>
  )
}
