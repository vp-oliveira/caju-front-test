import axios, { AxiosResponse } from 'axios'

import { HttpClient, HttpRequest, HttpResponse } from '../../protocols'

export class AxiosHttpAdapter implements HttpClient {
  async request<T>(data: HttpRequest<T>): Promise<HttpResponse<T>> {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data,
      headers: axiosResponse?.headers
    }
  }
}
