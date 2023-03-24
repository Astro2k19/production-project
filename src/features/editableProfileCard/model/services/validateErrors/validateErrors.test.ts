import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from 'entities/Profile'
import { validateErrors } from './validateErrors'

describe('validateErrors', () => {
  const data = {
    first: 'Artem',
    lastname: 'Katr',
    age: '21',
    currency: Currency.EUR,
    country: Country.USA,
    city: 'Kyiv',
    username: 'Astro2k23',
    avatar: ''
  }

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
    expect(validateErrors({})).toEqual([
      ValidateProfileError.INVALID_USER_DATA,
      ValidateProfileError.INVALID_AGE,
      ValidateProfileError.INVALID_USERNAME
    ])
  })
})