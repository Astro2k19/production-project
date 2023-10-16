import { updateProfileData } from './updateProfileData'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ValidateProfileError } from '@/entities/Profile'
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk'

describe('updateProfileData', () => {
  const data = {
    first: 'Astro',
    lastname: 'Rasko',
    age: '21',
    currency: Currency.EUR,
    country: Country.USA,
    city: 'Kyiv',
    username: 'Astro2k23',
    avatar: ''
  }

  test('successful request', async () => {
    const asyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data
      }
    })

    asyncThunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await asyncThunk.callAction()

    expect(asyncThunk.api.put).toHaveBeenCalled()
    expect(result.payload).toEqual(data)
    expect(result.meta.requestStatus).toEqual('fulfilled')
  })

  test('rejected with validate error', async () => {
    const asyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: {
          ...data,
          first: '',
          lastname: ''
        }
      }
    })

    const result = await asyncThunk.callAction()

    expect(asyncThunk.api.put).not.toHaveBeenCalled()
    expect(result.payload).toEqual([
      ValidateProfileError.INVALID_USER_DATA
    ])
    expect(result.meta.requestStatus).toEqual('rejected')
  })

  test('rejected with server error', async () => {
    const asyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data
      }
    })

    asyncThunk.api.put.mockReturnValue(Promise.reject(new Error('Something went wrong')))
    const result = await asyncThunk.callAction()

    expect(asyncThunk.api.put).toHaveBeenCalled()
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
    expect(result.meta.requestStatus).toEqual('rejected')
  })
})
