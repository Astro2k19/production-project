
export interface LoginFormSchema {
  username: string
  password: string
  isLoading: boolean
  error?: AuthFormErrorsIndex
}

export enum AuthFormErrors {
  ERR_NETWORK = 'Oops! Something went wrong. Please, try again!',
  SERVER_ERROR = 'Oops! Something went wrong. Please, try again!',
  ERR_BAD_REQUEST = 'Email or password is incorrect!'
}

export type AuthFormErrorsIndex = keyof typeof AuthFormErrors
