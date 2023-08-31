import { getProfileReadonly } from './getProfileReadonly'
import { type StoreSchema } from '@/app/providers/storeProvider'

describe('getProfileReadonly', () => {
  test('should return readonly status', () => {
    const result: DeepPartial<StoreSchema> = {
      profile: {
        readonly: true
      }
    }

    expect(getProfileReadonly(result as StoreSchema)).toBe(true)
  })

  test('should return undefined', () => {
    const result: DeepPartial<StoreSchema> = {}

    expect(getProfileReadonly(result as StoreSchema)).toBeUndefined()
  })
})
