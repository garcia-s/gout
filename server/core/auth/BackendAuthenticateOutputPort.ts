import axios from "axios"
import {
  ServerError,
  UnauthorizedError,
  UnexpectedError,
} from "../common/errors/PortErrors"
import { server } from "../conf"
import { IPersistanceAuthenticationOutputPort } from "./AuthenticateUseCase"
import { EmailAuthCredentialsEntity } from "./EmailAuthCredentialsEntity"
import { UserEntity } from "./UserEntity"

export class BackendAuthenticateOutputPort
  implements IPersistanceAuthenticationOutputPort
{
  async loginWithEmailAndPassword(
    credentials: EmailAuthCredentialsEntity
  ): Promise<UserEntity> {
    try {
      const response = await axios.post(server + "/auth/login", credentials, {
        withCredentials: true,
      })
      if (response.status === 401) throw new UnauthorizedError()
      if (response.status !== 200) throw new ServerError()
      return new UserEntity(response.data)
    } catch (e) {
      if (e instanceof UnauthorizedError || e instanceof ServerError) throw e
      throw new UnexpectedError()
    }
  }
}
