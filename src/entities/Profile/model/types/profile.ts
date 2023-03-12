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
}

export enum ValidateProfileErrors {
  INVALID_FIRSTNAME = 'INVALID_FIRSTNAME',
  INVALID_LASTNAME = 'INVALID_LASTNAME',
  INVALID_AGE = 'INVALID_AGE',
  INVALID_USERNAME = 'INVALID_USERNAME'
}
