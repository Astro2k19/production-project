import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type ArticleSingleCommentsSchema } from '../types/articleSingleComments'
import {
  fetchArticleCommentsById
} from '../services/fetchArticleCommentsById/fetchArticleCommentsById'

export const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const articleSingleCommentsSlice = createSlice({
  name: 'articleSingleComments',
  initialState: commentsAdapter.getInitialState<ArticleSingleCommentsSchema>({
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleCommentsById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleCommentsById.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleCommentsById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articleSingleCommentsReducer } = articleSingleCommentsSlice