import { ArticleType } from '../const/articleConst'
import { fetchArticleDetailsById } from '../services/fetchArticleDetailsById/fetchArticleDetailsById'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'

import { articleDetailsReducer } from './articleDetailsSlice'

describe('ArticleDetailsSlice', () => {
  const data = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT]
  }

  test('extraReducers fetchArticleDetailsById.pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false
    }

    const action = {
      type: fetchArticleDetailsById.pending.type
    }

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      action
    )).toEqual({
      isLoading: true
    })
  })

  test('extraReducers fetchArticleDetailsById.fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true
    }

    const action = {
      type: fetchArticleDetailsById.fulfilled.type,
      payload: data
    }

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      action
    )).toEqual({
      isLoading: false,
      data
    })
  })

  test('extraReducers fetchArticleDetailsById.rejected', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true
    }

    const action = {
      type: fetchArticleDetailsById.rejected.type,
      payload: 'Something went wrong!'
    }

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      action
    )).toEqual({
      isLoading: false,
      error: 'Something went wrong!'
    })
  })
})
