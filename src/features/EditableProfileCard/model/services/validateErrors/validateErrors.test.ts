
import { validateErrors } from './validateErrors'

import { type Profile } from '@/entities/Profile'
import { ValidateProfileError } from '@/entities/Profile'
import { profile as data } from '@/entities/Profile/testing'

describe('validateErrors', () => {
  test('invalid user data', () => {
    expect(validateErrors({ ...data, first: undefined, lastname: undefined })).toEqual([
      ValidateProfileError.INVALID_USER_DATA
    ])
  })

  test('invalid user age', () => {
    expect(validateErrors({ ...data, age: undefined })).toEqual([
      ValidateProfileError.INVALID_AGE
    ])
  })

  test('invalid username', () => {
    expect(validateErrors({ ...data, username: undefined })).toEqual([
      ValidateProfileError.INVALID_USERNAME
    ])
  })

  test('no user data', () => {
    expect(validateErrors()).toEqual([
      ValidateProfileError.NO_DATA
    ])
  })

  test('invalid all', () => {
    expect(validateErrors({} as Profile)).toEqual([
      ValidateProfileError.INVALID_USER_DATA,
      ValidateProfileError.INVALID_AGE,
      ValidateProfileError.INVALID_USERNAME
    ])
  })
})
