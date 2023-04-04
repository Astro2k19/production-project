import { type Article, type ArticleError } from './article'
import { type ApiError } from 'shared/api/api'

export interface ArticleDetailsSchema {
  isLoading: boolean
  error?: ApiError
  data?: Article
}
