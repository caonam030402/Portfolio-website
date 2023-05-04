import { skillData } from 'src/constants/data'

export default function Skill() {
  return (
    <div className='container mt-28 text-center'>
      <div className='flex flex-wrap justify-center gap-6'>
        {skillData.map((item, index) => (
          <div className='rounded-full bg-gradient-to-b from-cyan-500 to-green-300 p-[2px]' key={index}>
            <div className='cursor-pointer rounded-full bg-[#0e0a22] p-3'>
              <img className='h-[50px] w-[50px]' src={item} alt='' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
