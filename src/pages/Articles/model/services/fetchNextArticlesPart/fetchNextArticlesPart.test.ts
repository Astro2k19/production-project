import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'
import { fetchNextArticlesPart } from './fetchNextArticlesPart'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPart', () => {
  test('successfully load another part of articles', async () => {
    const asyncThunk = new TestAsyncThunk(fetchNextArticlesPart, {
      articlesPageList: {
        limit: 5,
        entities: {},
        ids: [],
        page: 3,
        hasMore: true,
        isLoading: false
      }
    })

    await asyncThunk.callAction()
    expect(asyncThunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 4 })
  })

  test('doesn\'t load articles, there\'re no more articles', async () => {
    const asyncThunk = new TestAsyncThunk(fetchNextArticlesPart, {
      articlesPageList: {
        limit: 5,
        entities: {},
        ids: [],
        page: 5,
        hasMore: false,
        isLoading: false
      }
    })

    await asyncThunk.callAction()
    expect(asyncThunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })

  test('doesn\'t load articles until past ones have finished loading', async () => {
    const asyncThunk = new TestAsyncThunk(fetchNextArticlesPart, {
      articlesPageList: {
        limit: 5,
        entities: {},
        ids: [],
        page: 5,
        hasMore: true,
        isLoading: true
      }
    })

    await asyncThunk.callAction()
    expect(asyncThunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
