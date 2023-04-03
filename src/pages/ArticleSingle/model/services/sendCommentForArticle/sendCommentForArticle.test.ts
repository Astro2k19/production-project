import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'
import { sendCommentForArticle } from './sendCommentForArticle'
import { type StoreSchema } from 'app/providers/storeProvider'

describe('sendCommentForArticle', () => {
  const state: DeepPartial<StoreSchema> = {
    articleDetails: {
      data: {
        id: 1
      }
    },
    user: {
      authData: {
        id: 1
      }
    }
  }

  const data = {
    id: 2,
    text: 'hello world!',
    user: {
      id: 1,
      username: 'Artem',
      avatar: ''
    }
  }

  test('successful request', async () => {
    const asyncThunk = new TestAsyncThunk(sendCommentForArticle, state)
    asyncThunk.api.post.mockReturnValue(Promise.resolve({ data }))
    const result = await asyncThunk.callAction('hello world!')

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3)
  })

  test('request failed', async () => {
    const asyncThunk = new TestAsyncThunk(sendCommentForArticle, { ...state, articleDetails: {} })
    const result = await asyncThunk.callAction('hello world!')

    expect(result.payload).toEqual('error')
    expect(result.meta.requestStatus).toBe('rejected')
    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
