import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'

export interface Profile {
  first?: string
  lastname?: string
  age?: number | string
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  formData?: Profile
  isLoading: boolean
  readonly: boolean
  error?: string
  validateProfileErrors?: ValidateProfileError[]
}

export enum ValidateProfileError {
  NO_DATA = 'NO_DATA',
  INVALID_USER_DATA = 'INVALID_USER_DATA',
  INVALID_AGE = 'INVALID_AGE',
  INVALID_USERNAME = 'INVALID_USERNAME',
  SERVER_ERROR = 'SERVER_ERROR'
}
