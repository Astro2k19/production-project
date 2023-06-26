import { getProfileError } from './getProfileError'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { ProfileError } from '../../types/editableProfileCard'

describe('getProfileError', () => {
  test('should return error text', () => {
    const result: DeepPartial<StoreSchema> = {
      profile: {
        error: {
          code: '500',
          message: ProfileError.SERVER_ERROR
        }
      }
    }

    expect(getProfileError(result as StoreSchema)).toEqual({
      code: '500',
      message: ProfileError.SERVER_ERROR
    })
  })

  test('should return undefined', () => {
    const result: DeepPartial<StoreSchema> = {}

    expect(getProfileError(result as StoreSchema)).toBeUndefined()
  })
})
