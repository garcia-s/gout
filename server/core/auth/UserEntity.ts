import { OutputEntityError } from "../common/errors/EntityErrors"
import EmailAddress from "../common/validators/email_address"
import { UserRole } from "../common/validators/user_role"

export enum UserEntityErrorFields {
  name = "name",
  email = "email",
  role = "number",
}

export enum UserEntityRole {
  admin = 0,
  client = 1,
}

export class UserEntity {
  name: string
  email: string
  role: UserEntityRole

  constructor(params: { name: string; email: string; role: number }) {
    const fields: UserEntityErrorFields[] = []

    if (params.name.length < 2 || params.name.length > 100)
      fields.push(UserEntityErrorFields.name)

    if (!EmailAddress.validate(params.email))
      fields.push(UserEntityErrorFields.email)

    if (!UserRole.validate(params.role)) fields.push(UserEntityErrorFields.role)

    //throw
    if (fields.length > 0)
      throw new OutputEntityError<UserEntityErrorFields>(fields)

    this.name = params.name
    this.email = params.email
    this.role = params.role
  }
}
