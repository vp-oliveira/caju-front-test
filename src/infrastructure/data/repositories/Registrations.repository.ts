import { AxiosHttpAdapter } from "../http";
import { HttpResponse, HttpStatusCode } from "../protocols";

import {
  CreateRegistration,
  LoadRegistrations,
  UpdateRegistration,
  DeleteRegistration,
} from "@/core/domain/registrations";
import { VITE_API_URL } from "@/infrastructure/AppSettings";

export class RegistrationsRepository {
  public async LoadRegistrations(
    filters?: string
  ): Promise<HttpResponse<LoadRegistrations.Response>> {
    const httpClient = new AxiosHttpAdapter();

    const request: HttpResponse<LoadRegistrations.Response> =
      await httpClient.request({
        method: "GET",
        url: `${VITE_API_URL}/registrations${filters}`,
      });

    const httpStatusCode: Record<
      HttpStatusCode | any,
      HttpResponse<LoadRegistrations.Response>
    > = {
      [HttpStatusCode.serverError]: {
        body: [],
        statusCode: HttpStatusCode.serverError,
        headers: {},
      },
      [HttpStatusCode.ok]: {
        body: request.body,
        statusCode: request.statusCode,
        headers: request.headers,
      },
      undefined: {
        body: [],
        statusCode: HttpStatusCode.serverError,
        headers: {},
      },
    };

    return httpStatusCode[request.statusCode];
  }
  public async CreateRegistration(payload: CreateRegistration.Request) {
    const httpClient = new AxiosHttpAdapter();

    const request: HttpResponse<CreateRegistration.Request> =
      await httpClient.request({
        method: "POST",
        url: `${VITE_API_URL}/registrations`,
        body: {
          admissionDate: payload.admissionDate,
          cpf: payload.cpf,
          email: payload.email,
          employeeName: payload.employeeName,
          status: "REVIEW",
        },
      });

    const httpStatusCode: Record<HttpStatusCode | any, any> = {
      [HttpStatusCode.serverError]: {
        body: [],
        statusCode: HttpStatusCode.serverError,
        headers: {},
      },
      [HttpStatusCode.created]: {
        body: [],
        statusCode: HttpStatusCode.created,
        headers: {},
      },
      undefined: {
        body: [],
        statusCode: HttpStatusCode.serverError,
        headers: {},
      },
    };

    return httpStatusCode[request.statusCode];
  }
  public async UpdateRegistration(
    id: string,
    payload: UpdateRegistration.Request
  ) {
    const httpClient = new AxiosHttpAdapter();

    const request: HttpResponse<UpdateRegistration.Request> =
      await httpClient.request({
        method: "PUT",
        url: `${VITE_API_URL}/registrations/${id}`,
        body: payload,
      });

    const httpStatusCode: Record<HttpStatusCode | any, any> = {
      [HttpStatusCode.serverError]: {
        body: [],
        statusCode: HttpStatusCode.serverError,
        headers: {},
      },
      [HttpStatusCode.ok]: {
        body: [],
        statusCode: HttpStatusCode.ok,
        headers: {},
      },
      undefined: {
        body: [],
        statusCode: HttpStatusCode.serverError,
        headers: {},
      },
    };

    return httpStatusCode[request.statusCode];
  }
  public async DeleteRegistration(id: string) {
    const httpClient = new AxiosHttpAdapter();

    const request: HttpResponse<DeleteRegistration.Request> =
      await httpClient.request({
        method: "DELETE",
        url: `${VITE_API_URL}/registrations/${id}`,
      });

    const httpStatusCode: Record<HttpStatusCode | any, any> = {
      [HttpStatusCode.serverError]: {
        body: [],
        statusCode: HttpStatusCode.serverError,
        headers: {},
      },
      [HttpStatusCode.ok]: {
        body: [],
        statusCode: HttpStatusCode.ok,
        headers: {},
      },
      undefined: {
        body: [],
        statusCode: HttpStatusCode.serverError,
        headers: {},
      },
    };

    return httpStatusCode[request.statusCode];
  }
}
