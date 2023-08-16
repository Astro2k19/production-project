import { type ApiError } from '@/shared/api/api'
import { type Profile } from '@/entities/Profile'
import { type ValidateProfileError } from '../const/editableProfileCardConst'

export interface ProfileSchema {
  data?: Profile
  formData?: Profile
  isLoading?: boolean
  readonly?: boolean
  error?: ApiError
  validateProfileErrors?: ValidateProfileError[]
}
