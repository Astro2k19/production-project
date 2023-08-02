import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArticlesListHasMore,
  getArticlesListIsLoading
} from '../../selectors/articlesPageList'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesFiltersActions, getArticlesFiltersPage } from 'features/articlesFilters'

export const fetchNextArticlesPart = createAsyncThunk<undefined, undefined, AsyncThunkConfig>(
  'articlesPageList/fetchNextArticlesPart',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const page = getArticlesFiltersPage(getState())
    const hasMore = getArticlesListHasMore(getState())
    const isLoading = getArticlesListIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlesFiltersActions.setPage(page + 1))
      dispatch(fetchArticlesList())
    }

    return undefined
  })
