import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from '../../types/article'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { type AxiosError as AxiosErrorType, isAxiosError } from 'axios'
import { type ApiError } from 'shared/api/api'

export const fetchArticleDetailsById = createAsyncThunk<Article, string | undefined, AsyncThunkConfig<ApiError>>('article/fetchArticleDetailsData', async (id, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI

  if (!id) {
    return rejectWithValue({
      code: '404',
      message: 'No id'
    })
  }

  try {
    const response = await extra.api.get(`/articles/${id}`)

    if (!response.data) {
      return rejectWithValue({
        code: '500',
        message: 'No data'
      })
    }

    return response.data
  } catch (e: unknown) {
    const error = e as AxiosErrorType

    if (error.response) {
      return rejectWithValue({
        code: error.response.status.toString(),
        message: error.message
      })
    }

    return rejectWithValue({
      code: '500',
      message: 'Server error'
    })
  }
})
