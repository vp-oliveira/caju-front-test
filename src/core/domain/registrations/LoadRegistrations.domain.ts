import { RegistrationStatus } from '@/core/enums/registrations'

export namespace LoadRegistrations {
  export type DataModel = {
    admissionDate: string
    email: string
    employeeName: string
    status: RegistrationStatus
    cpf: string
    id: string
  }

  export type Filters = {
    cpf: string
  }

  export type Response = DataModel[]
}
