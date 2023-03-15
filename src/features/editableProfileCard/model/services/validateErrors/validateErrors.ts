import { type Profile, ValidateProfileErrors } from 'entities/Profile'

export const validateErrors = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA]
  }

  const errors: ValidateProfileErrors[] = []

  if (!profile.lastname || !profile.first) {
    errors.push(ValidateProfileErrors.INVALID_USER_DATA)
  }

  if (!profile.age || !Number.isInteger(+profile.age)) {
    errors.push(ValidateProfileErrors.INVALID_AGE)
  }

  if (!profile.username) {
    errors.push(ValidateProfileErrors.INVALID_USERNAME)
  }

  return errors
}
