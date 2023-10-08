import { memo, Suspense, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useFetchArticleSingleComment, useSendArticleSingleComment } from '../../api/articleSingleCommentApi'

import { CommentsList } from '@/entities/Comment'
import { getUserAuthDate } from '@/entities/User'
import { AddCommentForm } from '@/features/AddCommentForm'
import { classNames } from '@/shared/lib'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

interface ArticleSingleCommentsProps {
  id: string
  className?: string
}

export const ArticleSingleComments = memo(({ className, id }: ArticleSingleCommentsProps) => {
  const { t } = useTranslation('article')
  const user = useAppSelector(getUserAuthDate)
  const [sendArticleSingleComment, { isLoading: isFetching }] = useSendArticleSingleComment()
  const { data: comments, isLoading, error } = useFetchArticleSingleComment(id)

  const onSendComment = useCallback((text: string) => {
    sendArticleSingleComment({
      articleId: id,
      text,
      userId: user?.id
    })
  }, [id, sendArticleSingleComment, user?.id])

  console.log(__API_URL__)
  return (
      <VStack gap={'16'} className={classNames([className])}>
          <Text title={t('Comments')}/>
          <Suspense fallback={'Loading...'}>
              <AddCommentForm
                  onSendComment={onSendComment}
              />
          </Suspense>
          <CommentsList
              comments={comments}
              isLoading={isLoading || isFetching}
              error={error}
          />
      </VStack>
  )
})
