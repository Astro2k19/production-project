import { article as data } from '../../../mocks/data.mock'

import { fetchArticleDetailsById } from './fetchArticleDetailsById'

import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk'

describe('fetchArticleDetailsById', () => {
  test('successful request', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsById)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callAction('1')
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('request failed - no data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsById)
    thunk.api.get.mockReturnValue(Promise.resolve({}))

    const result = await thunk.callAction('1')
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual({
      code: '500',
      message: 'No data'
    })
  })
})
