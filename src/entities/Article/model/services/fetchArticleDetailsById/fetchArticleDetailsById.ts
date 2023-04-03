import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article, ArticleError } from '../../types/article'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { isAxiosError } from 'axios'

export const fetchArticleDetailsById = createAsyncThunk<Article, string, AsyncThunkConfig<ArticleError>>('article/fetchArticleDetailsData', async (id, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = await extra.api.get(`/articles/${id}`)

    if (!response.data) {
      return rejectWithValue(ArticleError.NO_DATA)
    }

    return response.data
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.log(e, 'isAxiosError')
      const errorMessage = e.response?.data.code as ArticleError

      return rejectWithValue(errorMessage)
    }
  }
})
