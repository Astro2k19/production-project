import { getProfileValidateErrors } from './getProfileValidateErrors'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { ValidateProfileErrors } from 'entities/Profile'

describe('getProfileValidateErrors', () => {
  const errors = [
    ValidateProfileErrors.SERVER_ERROR,
    ValidateProfileErrors.INVALID_USERNAME
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
