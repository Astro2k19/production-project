import { type ApiError } from '@/shared/api/api'
import { getErrorMessage } from '@/shared/lib/getErrorMessage/getErrorMessage'
import { ArticleError } from '../../model/conts/articleConts'

const articleErrorCodeMappings = {
  404: `${ArticleError.NOT_FOUND}`,
  500: `${ArticleError.SERVER_ERROR}`
}

export const getArticleErrorMessage = (error?: ApiError) => {
  if (!error) return
  return getErrorMessage(error, articleErrorCodeMappings, 'article', ['fetch_error'])
}
