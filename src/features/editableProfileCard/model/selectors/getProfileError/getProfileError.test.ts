import { getProfileError } from './getProfileError'
import { type StoreSchema } from '@/app/providers/storeProvider'
import { ProfileError } from '../../const/editableProfileCardConst'

describe('getProfileError', () => {
  test('should return error Text', () => {
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
