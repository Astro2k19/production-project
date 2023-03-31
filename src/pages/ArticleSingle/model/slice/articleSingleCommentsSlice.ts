import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type ArticleSingleCommentsSchema } from 'pages/ArticleSingle'
import {
  fetchArticleCommentsById
} from 'pages/ArticleSingle/model/services/fetchArticleCommentsById/fetchArticleCommentsById'

export const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const articleSingleCommentsSlice = createSlice({
  name: 'articleSingleComments',
  initialState: commentsAdapter.getInitialState<ArticleSingleCommentsSchema>({
    isLoading: false,
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        user: { id: 1, username: 'User', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
        text: 'comment 1'
      },
      2: {
        id: '2',
        user: { id: 1, username: 'User', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
        text: 'comment 22'
      }
    }
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
