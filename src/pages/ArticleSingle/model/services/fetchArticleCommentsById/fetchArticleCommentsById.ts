import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'

export const fetchArticleCommentsById = createAsyncThunk<Comment[], string | undefined, AsyncThunkConfig<string>>(
  'article/fetchArticleCommentsById', async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!id) {
      return rejectWithValue('error')
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId: id,
          _expand: 'user' // comment is a child, user is a parent
        }
      })

      if (!response.data) {
        return rejectWithValue('error')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  })
