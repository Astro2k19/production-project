import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import {
  fetchArticleDetailsById
} from '../services/fetchArticleDetailsById/fetchArticleDetailsById'
import { type Article } from '../types/article'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailsById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleDetailsById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticleDetailsById.rejected, (state, action) => {
        console.log(action.payload, 'fetchArticleDetailsById action.payload!!!!!!!!')
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
