import { type UserRoles } from '../conts/userConst'

export interface User {
  id: number | string
  username: string
  avatar?: string
  roles?: UserRoles[]
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
