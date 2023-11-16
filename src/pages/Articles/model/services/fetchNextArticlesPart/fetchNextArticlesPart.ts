import { createAsyncThunk } from '@reduxjs/toolkit'

import { type AsyncThunkConfig } from '@/app/providers/storeProvider'

import {
    getArticlesFiltersPage,
    getArticlesListHasMore,
    getArticlesListIsLoading,
} from '../../selectors/articlesPageList'
import { articlesPageActions } from '../../slice/articlesPageListSlice/articlesPageListSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPart = createAsyncThunk<
    undefined,
    undefined,
    AsyncThunkConfig
>('articlesPageList/fetchNextArticlesPart', async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const page = getArticlesFiltersPage(getState())
    const hasMore = getArticlesListHasMore(getState())
    const isLoading = getArticlesListIsLoading(getState())
    const { setPage } = articlesPageActions

    if (hasMore && !isLoading) {
        dispatch(setPage(page + 1))
        dispatch(fetchArticlesList())
    }

    return undefined
})
