import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'
import { fetchProfileData } from './fetctProfileData'

describe('fetchProfileData', () => {
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

  test('successful request', async () => {
    const asyncThunk = new TestAsyncThunk(fetchProfileData)
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await asyncThunk.callAction()

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('rejected request', async () => {
    const asyncThunk = new TestAsyncThunk(fetchProfileData)
    asyncThunk.api.get.mockReturnValue(Promise.reject(new Error('Something went wrong')))
    const result = await asyncThunk.callAction()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('SERVER_ERROR')
  })
})