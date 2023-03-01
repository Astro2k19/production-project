import { getAuthError } from './getAuthError'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

describe('getAuthError', () => {
  test('should return error', () => {
    const result = {
      loginForm: {
        error: 'Server error'
      }
    } as StoreSchema

    expect(getAuthError(result)).toBe('Server error')
  })

  test('should return empty error', () => {
    const result = {} as StoreSchema

    expect(getAuthError(result)).toBeUndefined()
  })
})
