export interface User {
  id: number | string
  username: string
}

export interface UserSchema {
  authData?: User
}
