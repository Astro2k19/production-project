import { type ApiError } from 'shared/api/api'

export interface LoginFormSchema {
  username: string
  password: string
  isLoading: boolean
  error?: ApiError
}

export enum AuthFormError {
  NETWORK_ERROR = 'NETWORK_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  BAD_REQUEST_ERROR = 'BAD_REQUEST_ERROR'
}
