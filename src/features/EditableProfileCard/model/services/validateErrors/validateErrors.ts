import { type Profile } from '@/entities/Profile'
import { ValidateProfileError } from '@/entities/Profile'

export const validateErrors = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const errors: ValidateProfileError[] = []

  if (!profile.lastname || !profile.first) {
    errors.push(ValidateProfileError.INVALID_USER_DATA)
  }

  if (!profile.age || !Number.isInteger(+profile.age)) {
    errors.push(ValidateProfileError.INVALID_AGE)
  }

  if (!profile.username) {
    errors.push(ValidateProfileError.INVALID_USERNAME)
  }

  return errors
}
