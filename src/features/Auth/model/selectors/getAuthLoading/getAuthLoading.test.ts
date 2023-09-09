import { getAuthLoading } from './getAuthLoading'

import { type StoreSchema } from '@/app/providers/storeProvider'

describe('getAuthLoading', () => {
  test('should return true', () => {
    const result = {
      loginForm: {
        isLoading: true
      }
    } as StoreSchema

    expect(getAuthLoading(result)).toBe(true)
  })

  test('should return false', () => {
    const result = {} as StoreSchema

    expect(getAuthLoading(result)).toBe(false)
  })
})
