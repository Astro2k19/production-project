import { getAuthPassword } from './getAuthPassword'

import { type StoreSchema } from '@/app/providers/storeProvider'

describe('getAuthPassword', () => {
  test('should return password', () => {
    const result = {
      loginForm: {
        password: '123456'
      }
    } as StoreSchema

    expect(getAuthPassword(result)).toBe('123456')
  })

  test('should return empty string', () => {
    const result = {} as StoreSchema

    expect(getAuthPassword(result)).toBe('')
  })
})
