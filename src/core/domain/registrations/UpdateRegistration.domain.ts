import { RegistrationStatus } from '@/core/enums/registrations'

export namespace UpdateRegistration {
  export type DataModel = {
    status: RegistrationStatus
    admissionDate: Date
    email: string
    employeeName: string
    cpf: string
  }

  export type Request = DataModel
}
