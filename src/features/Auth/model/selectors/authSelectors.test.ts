import { AuthFormError } from '../const/authConst'

import { getAuthError, getAuthLoading, getAuthPassword, getAuthUsername } from './authSelectors'

import { StoreSchema } from '@/app/providers/storeProvider'

describe('getAuthError', () => {
  test('should return error', () => {
    const result: DeepPartial<StoreSchema> = {
      loginForm: {
        error: {
          code: '500',
          message: AuthFormError.SERVER_ERROR
        }
      }
    }

    expect(getAuthError(result as StoreSchema)).toEqual({
      code: '500',
      message: AuthFormError.SERVER_ERROR
    })
  })

  test('should return empty error', () => {
    const result = {} as StoreSchema

    expect(getAuthError(result)).toBeUndefined()
  })
})

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
