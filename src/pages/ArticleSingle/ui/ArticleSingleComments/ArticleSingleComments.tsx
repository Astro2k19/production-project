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
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { articleSingleCommentsReducer } from '../../model/slice/articleSingleCommentsSlice'
import { VStack } from 'shared/ui/stack'

interface ArticleSingleCommentsProps {
  id: string
  className?: string
}

const reducers: ReducersList = {
  articleSinglePageComments: articleSingleCommentsReducer
}

export const ArticleSingleComments = memo(({ className, id }: ArticleSingleCommentsProps) => {
  const { t } = useTranslation()
  const comments = useSelector(articleSingleCommentsSelectors.selectAll)
  console.log(comments, 'comments')
  const isLoading = useSelector(getArticleSingleCommentsIsLoading)
  console.log(isLoading, 'isLoading')
  const dispatch = useAppDispatch()

  const commentsError = useSelector(getArticleSingleCommentsError)
  const onSendComment = useCallback((text: string) => {
    dispatch(sendCommentForArticle(text))
  }, [dispatch])

  useFetchData(() => {
    dispatch(fetchArticleCommentsById(id))
  })

  return (
      <DynamicModuleLoader reducers={reducers}>
          <VStack gap={'16'} className={classNames([className])}>
              <Text title={t('Comments')}/>
              <AddCommentForm
                  onSendComment={onSendComment}
              />
              <CommentsList
                  comments={comments}
                  isLoading={isLoading}
                  error={getArticleCommentsErrorMessage(commentsError)}
              />
          </VStack>
      </DynamicModuleLoader>
  )
})
