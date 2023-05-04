import axios, { type AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://6453d1e2c18adbbdfea894f4.mockapi.io/v1',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //Error handling in addition to error 422
  }
}

export const http = new Http().instance
