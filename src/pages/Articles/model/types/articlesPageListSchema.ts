import { type ApiError } from 'shared/api/api'
import { type Article, type ArticlesListView } from 'entities/Article'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticlesPageListSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: ApiError
  view: ArticlesListView
  page: number
  limit?: number
  hasMore: boolean
}
