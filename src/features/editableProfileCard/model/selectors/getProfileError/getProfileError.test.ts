import { getProfileError } from './getProfileError'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

describe('getProfileError', () => {
  test('should return error text', () => {
    const result: DeepPartial<StoreSchema> = {
      profile: {
        error: 'Oops, something went wrong!'
      }
    }

    expect(getProfileError(result as StoreSchema)).toBe('Oops, something went wrong!')
  })

  test('should return undefined', () => {
    const result: DeepPartial<StoreSchema> = {}

    expect(getProfileError(result as StoreSchema)).toBeUndefined()
  })
})
