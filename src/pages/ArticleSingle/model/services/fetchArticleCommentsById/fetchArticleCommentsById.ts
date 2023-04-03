import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'

export const fetchArticleCommentsById = createAsyncThunk<Comment[], number | string | undefined, AsyncThunkConfig<string>>(
  'articleSingle/fetchArticleCommentsById',
  async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!id) {
      return rejectWithValue('NO_ID')
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId: id,
          _expand: 'user' // comment is a child, user is a parent
        }
      })

      if (!response.data) {
        return rejectWithValue('NO_DATA')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('SERVER_ERROR')
    }
  })
