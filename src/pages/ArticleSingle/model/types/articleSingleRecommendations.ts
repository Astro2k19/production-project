import { type EntityState } from '@reduxjs/toolkit'
import { type ApiError } from 'shared/api/api'
import { type Article } from 'entities/Article'

export interface ArticleSingleRecommendationsSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: ApiError
}

export enum ArticleSingleRecommendationsError {
  NOT_FOUND = 'NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR'
}
