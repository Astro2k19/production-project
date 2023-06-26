import { type ApiError } from 'shared/api/api'
import { type Profile } from 'entities/Profile'

export interface ProfileSchema {
  data?: Profile
  formData?: Profile
  isLoading?: boolean
  readonly?: boolean
  error?: ApiError
  validateProfileErrors?: ValidateProfileError[]
}

export enum ValidateProfileError {
  NO_DATA = 'NO_DATA',
  INVALID_USER_DATA = 'INVALID_USER_DATA',
  INVALID_AGE = 'INVALID_AGE',
  INVALID_USERNAME = 'INVALID_USERNAME',
  SERVER_ERROR = 'SERVER_ERROR'
}

export enum ProfileError {
  NOT_FOUND = 'NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR'
}
