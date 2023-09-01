import { AuthFormError } from '../../const/authConst'

import { getAuthError } from './getAuthError'

import { type StoreSchema } from '@/app/providers/storeProvider'

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
