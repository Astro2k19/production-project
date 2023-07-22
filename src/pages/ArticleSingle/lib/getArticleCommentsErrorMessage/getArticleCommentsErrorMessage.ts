import { type ApiError } from 'shared/api/api'
import { getErrorMessage } from 'shared/lib/getErrorMessage/getErrorMessage'
import { ArticleSingleCommentsError } from '../../model/const/articleSingleConst'

const articleSingleCommentsErrorCodeMappings = {
  404: `${ArticleSingleCommentsError.NOT_FOUND}`,
  500: `${ArticleSingleCommentsError.SERVER_ERROR}`
}

export const getArticleCommentsErrorMessage = (error?: ApiError) => {
  if (!error) return
  return getErrorMessage(error, articleSingleCommentsErrorCodeMappings, 'article.fetch_error')
}
