import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk'
import { fetchArticleCommentsById } from './fetchArticleCommentsById'
import { type Comment } from '@/entities/Comment'

describe('fetchArticleCommentsById', () => {
  const data: Comment[] = [
    {
      id: 1,
      text: 'hello world 1 !',
      user: {
        id: '1',
        username: 'Artem',
        avatar: ''
      }
    },
    {
      id: 2,
      text: 'hello world 2 !',
      user: {
        id: '1',
        username: 'Artem',
        avatar: ''
      }
    }
  ]

  test('successful request', async () => {
    const asyncThunk = new TestAsyncThunk(fetchArticleCommentsById)
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('request failed - no id', async () => {
    const asyncThunk = new TestAsyncThunk(fetchArticleCommentsById)
    const result = await asyncThunk.callAction(undefined)

    expect(result.payload).toEqual({
      code: '404',
      message: 'No id'
    })
    expect(result.meta.requestStatus).toBe('rejected')
  })

  test('request failed - no data', async () => {
    const asyncThunk = new TestAsyncThunk(fetchArticleCommentsById)
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ }))
    const result = await asyncThunk.callAction('1')

    expect(result.payload).toEqual({
      code: '500',
      message: 'No data'
    })
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
