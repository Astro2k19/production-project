import { type Profile, type ValidateProfileError } from '@/entities/Profile'
import { type ApiError } from '@/shared/api/api'

export interface ProfileSchema {
  data?: Profile
  formData?: Profile
  isLoading?: boolean
  readonly?: boolean
  error?: ApiError
  validateProfileErrors?: ValidateProfileError[]
}
