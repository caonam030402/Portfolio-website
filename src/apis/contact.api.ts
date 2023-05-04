import { http } from './../utils/http'
export const contactApi = {
  postMessage(body: { name: string; email: string; message: string }) {
    return http.post('contact', body)
  }
}
