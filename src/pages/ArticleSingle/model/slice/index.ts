import { combineReducers } from '@reduxjs/toolkit'
import { type ArticleSinglePageSchema } from '../types'
import { articleSingleCommentsReducer } from './articleSingleCommentsSlice'
// import { articleSingleRecommendationsReducer } from './articleSingleRecommendationsSlice'

export const articleSinglePageReducer = combineReducers<ArticleSinglePageSchema>({
  comments: articleSingleCommentsReducer
  // recommendations: articleSingleRecommendationsReducer
})
