import { memo, Suspense, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AddCommentForm } from 'src/features/AddCommentForm'

import {
  getArticleCommentsErrorMessage
} from '../../lib/getArticleCommentsErrorMessage/getArticleCommentsErrorMessage'
import {
  articleSingleCommentsSelectors, getArticleSingleCommentsError,
  getArticleSingleCommentsIsLoading
} from '../../model/selectors/comments'
import {
  fetchArticleCommentsById
} from '../../model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import { sendCommentForArticle } from '../../model/services/sendCommentForArticle/sendCommentForArticle'
import { articleSingleCommentsReducer } from '../../model/slice/articleSingleCommentsSlice'

import { CommentsList } from '@/entities/Comment'
import { classNames } from '@/shared/lib'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useFetchData } from '@/shared/lib/hooks/useFetchData/useFetchData'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

interface ArticleSingleCommentsProps {
  id: string
  className?: string
}

const reducers: ReducersList = {
  articleSingleComments: articleSingleCommentsReducer
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
      <DynamicModuleLoader reducers={reducers}>
          <VStack gap={'16'} className={classNames([className])}>
              <Text title={t('Comments')}/>
              <Suspense fallback={'Loading...'}>
                  <AddCommentForm
                      onSendComment={onSendComment}
                  />
              </Suspense>
              <CommentsList
                  comments={comments}
                  isLoading={isLoading}
                  error={getArticleCommentsErrorMessage(commentsError)}
              />
          </VStack>
      </DynamicModuleLoader>
  )
})
