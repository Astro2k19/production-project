export interface User {
  id: number | string
  username: string
  avatar?: string
  roles?: UserRoles[]
}

export enum UserRoles {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
