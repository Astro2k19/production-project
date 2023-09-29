import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  fetchArticleCommentsById
} from '../fetchArticleCommentsById/fetchArticleCommentsById'

import { type AsyncThunkConfig } from '@/app/providers/storeProvider'
import { type Comment } from '@/entities/Comment'
import { getUserAuthDate } from '@/entities/User'

interface sendCommentForArticleArgs {
    text: string
    articleId?: string
}

export const sendCommentForArticle = createAsyncThunk<Comment, sendCommentForArticleArgs, AsyncThunkConfig<string>>(
  'articleSingle/sendCommentForArticle',
  async ({text, articleId}, thunkApi) => {
    const { getState, extra, rejectWithValue, dispatch } = thunkApi

    const user = getUserAuthDate(getState())

    if (!articleId || !user?.id) {
      return rejectWithValue('error')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: articleId,
        userId: user?.id,
        text
      })


      dispatch(fetchArticleCommentsById(articleId))

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  })
