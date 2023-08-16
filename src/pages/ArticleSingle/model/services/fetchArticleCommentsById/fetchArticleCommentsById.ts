import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Comment } from '@/entities/Comment'
import { type AsyncThunkConfig } from '@/app/providers/storeProvider'
import { type AxiosError as AxiosErrorType } from 'axios/index'

export const fetchArticleCommentsById = createAsyncThunk<Comment[], string | number | undefined, AsyncThunkConfig<string>>(
  'articleSingle/fetchArticleCommentsById',
  async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!id) {
      return rejectWithValue({
        code: '404',
        message: 'No id'
      })
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId: id,
          _expand: 'user' // comment is a child, user is a parent
        }
      })

      console.log(response, 'response comments')

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
