import { getAuthUsername } from './getAuthUsername'
import { type StoreSchema } from '@/app/providers/storeProvider/config/StoreSchema'

describe('getAuthUsername', () => {
  test('should return username', () => {
    const result = {
      loginForm: {
        username: 'hello world!'
      }
    } as StoreSchema

    expect(getAuthUsername(result)).toBe('hello world!')
  })

  test('should return empty string', () => {
    const result = {} as StoreSchema

    expect(getAuthUsername(result)).toBe('')
  })
})
