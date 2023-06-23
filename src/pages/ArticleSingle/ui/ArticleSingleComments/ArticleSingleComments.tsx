import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib'
import { Text } from 'shared/ui'
import { AddCommentForm } from 'features/addCommentForm'
import { CommentsList } from 'entities/Comment'
import {
  getArticleCommentsErrorMessage
} from '../../lib/getArticleCommentsErrorMessage/getArticleCommentsErrorMessage'
import { useSelector } from 'react-redux'
import {
  articleSingleCommentsSelectors, getArticleSingleCommentsError,
  getArticleSingleCommentsIsLoading
} from '../../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { sendCommentForArticle } from '../../model/services/sendCommentForArticle/sendCommentForArticle'
import { useFetchData } from 'shared/lib/hooks/useFetchData'
import {
  fetchArticleCommentsById
} from '../../model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import { useTranslation } from 'react-i18next'

interface ArticleSingleCommentsProps {
  id: string
  className?: string
}

export const ArticleSingleComments = memo(({ className, id }: ArticleSingleCommentsProps) => {
  const { t } = useTranslation()
  const comments = useSelector(articleSingleCommentsSelectors.selectAll)
  const isLoading = useSelector(getArticleSingleCommentsIsLoading)
  const dispatch = useAppDispatch()

  const commentsError = useSelector(getArticleSingleCommentsError)
  const onSendComment = useCallback((text: string) => {
    dispatch(sendCommentForArticle(text))
  }, [dispatch])

  useFetchData(() => {
    dispatch(fetchArticleCommentsById(id))
  })

  return (
      <div className={classNames([className])}>
          <Text title={t('Comments')}/>
          <AddCommentForm
                onSendComment={onSendComment}
            />
          <CommentsList
                comments={comments}
                isLoading={isLoading}
                error={getArticleCommentsErrorMessage(commentsError)}
            />
      </div>
  )
})
