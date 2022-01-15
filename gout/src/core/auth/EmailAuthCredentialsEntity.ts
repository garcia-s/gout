import { InputEntityError } from "../common/errors/EntityErrors"
import EmailAddress from "../common/validators/email_address"

export enum EmailAuthCredentialsErrorFields {
  email = "email",
}

export class EmailAuthCredentialsEntity {
  email: string
  password: string

  constructor(email: string, password: string) {
    const fields: EmailAuthCredentialsErrorFields[] = []

    if (!EmailAddress.validate(email))
      fields.push(EmailAuthCredentialsErrorFields.email)

    if (fields.length > 0)
      throw new InputEntityError<EmailAuthCredentialsErrorFields>(fields)

    this.email = email
    this.password = password
  }
}
