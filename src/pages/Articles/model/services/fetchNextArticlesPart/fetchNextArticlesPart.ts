import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArticlesListHasMore,
  getArticlesListIsLoading,
  getArticlesListPage
} from '../../selectors/articlesPageList'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slice/articlesPageListSlice/articlesPageListSlice'

export const fetchNextArticlesPart = createAsyncThunk<undefined, undefined, AsyncThunkConfig>(
  'articlesPageList/fetchNextArticlesPart',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const page = getArticlesListPage(getState())
    const hasMore = getArticlesListHasMore(getState())
    const isLoading = getArticlesListIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      dispatch(fetchArticlesList())
    }

    return undefined
  })
