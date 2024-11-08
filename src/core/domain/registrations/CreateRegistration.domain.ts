export namespace CreateRegistration {
  export type DataModel = {
    admissionDate: Date
    email: string
    employeeName: string
    cpf: string
  }

  export type Request = DataModel
}
