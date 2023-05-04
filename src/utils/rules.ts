import * as yup from 'yup'

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .max(160, 'Độ dài từ 5 - 160 kí tự')
    .min(5, 'Độ dài từ 5 - 160 kí tự')
    .email('Vui lòng nhập đúng định dạng Email'),
  name: yup.string().required('Name là bắt buộc'),
  message: yup.string().required('Message là bắt buộc').min(6, 'Vui lòng nhập trên 6 kí tự')
})
