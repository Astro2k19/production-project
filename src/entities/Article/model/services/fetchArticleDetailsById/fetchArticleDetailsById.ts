import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from '../../types/article'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'

export const fetchArticleDetailsById = createAsyncThunk<Article, string, AsyncThunkConfig<string>>('article/fetchArticleDetailsData', async (id, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = await extra.api.get(`/articles/${id}`)

    if (!response.data) {
      return rejectWithValue('error')
    }

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
