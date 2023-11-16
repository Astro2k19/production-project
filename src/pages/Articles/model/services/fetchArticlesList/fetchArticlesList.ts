import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AxiosError as AxiosErrorType } from 'axios/index'

import { type AsyncThunkConfig } from '@/app/providers/storeProvider'

import { type Article, ArticleType } from '@/entities/Article'

import { type ApiError } from '@/shared/api/api'
import { addUrlQueryParams } from '@/shared/lib'

import {
    getArticlesFiltersOrder,
    getArticlesFiltersPage,
    getArticlesFiltersSearch,
    getArticlesFiltersSort,
    getArticlesFiltersType,
} from '../../selectors/articlesPageList'

// import { getArticlesListLimit } from '../../selectors/articlesPageList'

interface FetchArticlesListArgs {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListArgs | undefined,
    AsyncThunkConfig<ApiError>
>('articlesPageList/fetchArticlesList', async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const page = getArticlesFiltersPage(getState())
    // const limit = getArticlesListLimit(getState())
    const sort = getArticlesFiltersSort(getState())
    const order = getArticlesFiltersOrder(getState())
    const search = getArticlesFiltersSearch(getState())
    const type = getArticlesFiltersType(getState())

    try {
        addUrlQueryParams({
            page,
            sort,
            order,
            search,
            type,
        })

        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _page: page,
                // _limit: limit,
                _sort: sort,
                _order: order,
                q: search,
                ...(type === ArticleType.ALL ? {} : { type_like: type }),
                _expand: 'user', // comment is a child, user is a parent
            },
        })

        if (!response.data) {
            return rejectWithValue({
                code: '500',
                message: 'No data',
            })
        }

        return response.data
    } catch (e) {
        const error = e as AxiosErrorType

        if (error.response) {
            return rejectWithValue({
                code: error.response.status.toString(),
                message: error.message,
            })
        }

        return rejectWithValue({
            code: '500',
            message: 'Server Error',
        })
    }
})
