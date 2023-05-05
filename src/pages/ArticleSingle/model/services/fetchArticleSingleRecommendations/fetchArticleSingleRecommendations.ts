import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { type AxiosError as AxiosErrorType } from 'axios/index'
import { type ApiError } from 'shared/api/api'
import { type Article } from 'entities/Article'

export const fetchArticleSingleRecommendations = createAsyncThunk<Article[], undefined, AsyncThunkConfig<ApiError>>(
  'articleSingle/fetchArticleSingleRecommendations',
  async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
          _expand: 'user'
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
