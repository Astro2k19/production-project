import { getProfileValidateErrors } from './getProfileValidateErrors'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { ValidateProfileError } from 'entities/Profile'

describe('getProfileValidateErrors', () => {
  const errors = [
    ValidateProfileError.SERVER_ERROR,
    ValidateProfileError.INVALID_USERNAME
  ]

  test('should return validate errors', () => {
    const result: DeepPartial<StoreSchema> = {
      profile: {
        validateProfileErrors: errors
      }
    }

    expect(getProfileValidateErrors(result as StoreSchema)).toEqual(errors)
  })

  test('should return undefined', () => {
    const result: DeepPartial<StoreSchema> = {}

    expect(getProfileValidateErrors(result as StoreSchema)).toBeUndefined()
  })
})
