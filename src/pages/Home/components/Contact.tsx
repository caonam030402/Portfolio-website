import { styles } from 'src/constants/styles'
import photo from '../../../assets/working_7.png'
import Button from 'src/components/Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from 'src/utils/rules'
import { contactApi } from 'src/apis/contact.api'
import { toast } from 'react-toastify'

type FormValues = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(schema)
  })

  console.log(errors.email?.message)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (data: FormValues) => {
    try {
      contactApi.postMessage(data)
      toast.success('Cảm ơn bạn ><')
    } catch (e) {
      toast.error('Thất bại')
    }
  }

  return (
    <div
      id='contact'
      className='container my-40 grid grid-cols-6 border border-gray-100 bg-gray-50 p-10 dark:border-gray-700 dark:bg-secondaryDark md:gap-20 md:rounded-xl lg:grid-cols-12'
    >
      <div className='col-span-12 hidden lg:col-span-4 lg:block'>
        <img className='w-[80%] lg:ml-16' src={photo} alt='' />
      </div>
      <div className='col-span-8'>
        <h1 className='font-medium text-primary lg:text-base'>GET IN TOUCH</h1>
        <h1 className={styles.heroHeadText + ' mb-12'}>Contact</h1>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className='mb-2 mt-4'>Your Name</p>
            <input
              {...register('name')}
              name='name'
              placeholder='What is your good name ?'
              className={`${
                errors.name
                  ? 'block w-full rounded-lg border border-red-500 bg-red-50 p-2.5 text-sm text-red-900 placeholder-red-700 outline-none focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500'
                  : 'border border-gray-200 bg-white text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              } block w-full rounded-md px-3 py-3 dark:bg-gray-700`}
              type='text'
            />
            <p className='mt-2 text-red-600 dark:text-red-500'>{errors.name?.message}</p>
          </div>
          <div>
            <p className='mb-2 mt-4'>Your email</p>
            <input
              {...register('email')}
              name='email'
              className={`${
                errors.email
                  ? 'block w-full rounded-lg border border-red-500 bg-red-50 p-2.5 text-sm text-red-900 placeholder-red-700 outline-none focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500'
                  : 'border border-gray-200 bg-white text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              } block w-full rounded-md px-3 py-3 dark:bg-gray-700`}
              placeholder='What your web address ?'
              type='text'
            />
            <p className='mt-2 text-red-600 dark:text-red-500'>{errors.email?.message}</p>
          </div>
          <div>
            <p className='mb-2 mt-4'>Your Message</p>
            <textarea
              {...register('message')}
              name='message'
              className={`${
                errors.message
                  ? 'block w-full rounded-lg border border-red-500 bg-red-50 p-2.5 text-sm text-red-900 placeholder-red-700 outline-none focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500'
                  : 'border border-gray-200 bg-white text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              } block h-[180px] w-full rounded-md px-3 py-3 dark:bg-gray-700`}
              placeholder='What you want to say?'
            />
          </div>
          <p className='mt-2 text-red-600 dark:text-red-500'>{errors.message?.message}</p>
          <Button classNameOther='rounded-md mt-5'>Send</Button>
        </form>
      </div>
    </div>
  )
}
