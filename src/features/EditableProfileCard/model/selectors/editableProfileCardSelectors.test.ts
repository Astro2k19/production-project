import {
  getProfileData,
  getProfileError, getProfileFormData, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors
} from './editableProfileCardSelectors'

import { StoreSchema } from '@/app/providers/storeProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileError, ValidateProfileError } from '@/entities/Profile'

describe('getProfileData', () => {
  const data = {
    first: 'Артем',
    lastname: 'Катрущенко',
    age: '12',
    currency: Currency.EUR,
    country: Country.USA,
    city: 'Poltava',
    username: 'ASTRO',
    avatar: ''
  }

  test('should return data', () => {
    const result: DeepPartial<StoreSchema> = {
      profile: {
        data
      }
    }

    expect(getProfileData(result as StoreSchema)).toEqual(data)
  })

  test('should return undefined', () => {
    const result: DeepPartial<StoreSchema> = {}

    expect(getProfileData(result as StoreSchema)).toBeUndefined()
  })
})

describe('getProfileError', () => {
  test('should return error Text', () => {
    const result: DeepPartial<StoreSchema> = {
      profile: {
        error: {
          code: '500',
          message: ProfileError.SERVER_ERROR
        }
      }
    }

    expect(getProfileError(result as StoreSchema)).toEqual({
      code: '500',
      message: ProfileError.SERVER_ERROR
    })
  })

  test('should return undefined', () => {
    const result: DeepPartial<StoreSchema> = {}

    expect(getProfileError(result as StoreSchema)).toBeUndefined()
  })
})

describe('getProfileData', () => {
  const data = {
    first: 'Артем',
    lastname: 'Катрущенко',
    age: '12',
    currency: Currency.EUR,
    country: Country.USA,
    city: 'Poltava',
    username: 'ASTRO',
    avatar: ''
  }

  test('should return data', () => {
    const result: DeepPartial<StoreSchema> = {
      profile: {
        formData: data
      }
    }

    expect(getProfileFormData(result as StoreSchema)).toEqual(data)
  })

  test('should return undefined', () => {
    const result: DeepPartial<StoreSchema> = {}

    expect(getProfileFormData(result as StoreSchema)).toBeUndefined()
  })
})

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

describe('getProfileValidateErrors', () => {
  const errors = [
    ValidateProfileError.SERVER_ERROR,
    ValidateProfileError.INVALID_USERNAME
  ]

  test('should return validate errors', () => {
    const result: DeepPartial<StoreSchema> = {
      profile: {
        validateProfileErrors: errors
      }
    }

    expect(getProfileValidateErrors(result as StoreSchema)).toEqual(errors)
  })

  test('should return undefined', () => {
    const result: DeepPartial<StoreSchema> = {}

    expect(getProfileValidateErrors(result as StoreSchema)).toBeUndefined()
  })
})
