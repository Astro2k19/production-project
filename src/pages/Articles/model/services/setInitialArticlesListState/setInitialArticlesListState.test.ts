import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'
import {
  setInitialArticlesListState
} from 'pages/Articles/model/services/setInitialArticlesListState/setInitialArticlesListState'

describe('setInitialArticlesListState', () => {
  test('inited state', async () => {
    const asyncThunk = new TestAsyncThunk(setInitialArticlesListState, {
      articlesPageList: {
        _inited: true
      }
    })

    const result = await asyncThunk.callAction()

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(asyncThunk.dispatch).toBeCalledTimes(2)
  })

  test('not inited state', async () => {
    const asyncThunk = new TestAsyncThunk(setInitialArticlesListState, {
      articlesPageList: {
        _inited: false
      }
    })

    const result = await asyncThunk.callAction()

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(asyncThunk.dispatch).toBeCalledTimes(4)
  })
})
