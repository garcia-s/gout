import { EmailAuthCredentialsEntity } from "./EmailAuthCredentialsEntity"
import { UserEntity } from "./UserEntity"

export class AuthenticateUseCase {
  backendPort: IPersistanceAuthenticationOutputPort
  constructor(port: IPersistanceAuthenticationOutputPort) {
    this.backendPort = port
  }
  async loginWithEmailAndPassword(
    credentials: EmailAuthCredentialsEntity
  ): Promise<UserEntity> {
    return await this.backendPort.loginWithEmailAndPassword(credentials)
  }
}

export interface IPersistanceAuthenticationOutputPort {
  loginWithEmailAndPassword(
    credentials: EmailAuthCredentialsEntity
  ): Promise<UserEntity>
}
