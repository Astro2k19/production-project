import { getProfileFormData } from './getProfileFormData'

import { type StoreSchema } from '@/app/providers/storeProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

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
