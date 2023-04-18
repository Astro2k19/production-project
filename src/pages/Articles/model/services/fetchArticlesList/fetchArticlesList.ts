import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { type AxiosError as AxiosErrorType } from 'axios/index'
import { type ApiError } from 'shared/api/api'
import { type Article } from 'entities/Article'
import { getArticlesListLimit } from 'pages/Articles/model/selectors/articlesPageList'

interface FetchArticlesListArgs {
  page: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListArgs, AsyncThunkConfig<ApiError>>(
  'articlesPageList/fetchArticlesList',
  async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const { page = 1 } = args
    const limit = getArticlesListLimit(getState())

    console.log(limit, 'fetchArticlesList limit')

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _page: page,
          _limit: limit,
          _expand: 'user' // comment is a child, user is a parent
        }
      })

      if (!response.data) {
        return rejectWithValue({
          code: '500',
          message: 'No data'
        })
      }

      return response.data
    } catch (e) {
      const error = e as AxiosErrorType

      if (error.response) {
        return rejectWithValue({
          code: error.response.status.toString(),
          message: error.message
        })
      }

      return rejectWithValue({
        code: '500',
        message: 'Server Error'
      })
    }
  })
