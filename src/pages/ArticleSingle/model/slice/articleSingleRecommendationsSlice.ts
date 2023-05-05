import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ArticleSingleRecommendationsSchema } from '../types/articleSingleRecommendations'
import {
  fetchArticleSingleRecommendations
} from '../services/fetchArticleSingleRecommendations/fetchArticleSingleRecommendations'

export const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const articleSingleRecommendationsSlice = createSlice({
  name: 'articleSingleRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleSingleRecommendationsSchema>({
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleSingleRecommendations.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleSingleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleSingleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articleSingleRecommendationsReducer } = articleSingleRecommendationsSlice
