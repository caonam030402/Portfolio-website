import * as yup from 'yup'

export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .max(160, 'Length from 5 to 160 characters')
    .min(5, 'Length from 5 to 160 characters')
    .email('Please enter the correct Email format'),
  name: yup.string().required('Name is required'),
  message: yup.string().required('Message is required').min(6, 'Please enter more than 6 characters')
})
