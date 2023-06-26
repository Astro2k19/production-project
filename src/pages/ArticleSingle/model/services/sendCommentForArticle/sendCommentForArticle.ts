import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { getArticleDetailsData } from 'entities/Article'
import { getUserAuthDate } from 'entities/User'
import {
  fetchArticleCommentsById
} from '../fetchArticleCommentsById/fetchArticleCommentsById'

export const sendCommentForArticle = createAsyncThunk<Comment, string, AsyncThunkConfig<string>>(
  'articleSingle/sendCommentForArticle',
  async (text, thunkApi) => {
    const { getState, extra, rejectWithValue, dispatch } = thunkApi

    const article = getArticleDetailsData(getState())
    const user = getUserAuthDate(getState())

    if (!article?.id || !user?.id) {
      return rejectWithValue('error')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: user?.id,
        text
      })

      console.log(response, 'response')
      console.log(article, 'article')

      dispatch(fetchArticleCommentsById(article.id))

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  })
