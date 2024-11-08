export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpRequest<T> = {
  url: string
  method: HttpMethod
  body?: T
  headers?: any
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body: T
  headers?: any
}

export type HttpResponseDefault<T = any> = {
  result: {
    data: Array<T>
  }
}

export type HttpResponsePagination<T = any> = {
  result: {
    hasNext: boolean
    hasPrevious: boolean
    pageSize: number
    totalPages: number
    totalRecords: number
    data: Array<T>
  }
}
export interface HttpClient<R = any> {
  request: (data: HttpRequest<R>) => Promise<HttpResponse<R>>
}
