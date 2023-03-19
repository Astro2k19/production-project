import { getProfileIsLoading } from './getProfileIsLoading'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

describe('getProfileIsLoading', () => {
  test('should return isLoading status', () => {
    const result: DeepPartial<StoreSchema> = {
      profile: {
        isLoading: true
      }
    }

    expect(getProfileIsLoading(result as StoreSchema)).toBe(true)
  })

  test('should return undefined', () => {
    const result: DeepPartial<StoreSchema> = {}

    expect(getProfileIsLoading(result as StoreSchema)).toBeUndefined()
  })
})
