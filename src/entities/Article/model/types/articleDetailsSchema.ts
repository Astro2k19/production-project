import { type Article, type ArticleError } from './article'

export interface ArticleDetailsSchema {
  isLoading: boolean
  error?: ArticleError
  data?: Article
}
