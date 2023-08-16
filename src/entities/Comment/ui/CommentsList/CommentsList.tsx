import { memo } from 'react'
import cls from './CommentsList.module.scss'
import { classNames } from '@/shared/lib'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { Text, TextVariants } from '@/shared/ui'
import { useTranslation } from 'react-i18next'

interface CommentsListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
  error?: string
}

export const CommentsList = memo(({ className, comments, isLoading, error }: CommentsListProps) => {
  const { t } = useTranslation('translation')

  if (isLoading) {
    return (
        <div className={classNames([cls.commentsList, className])}>
            {new Array(3).fill(null).map((_, index) => <CommentCard key={index} isLoading />)}
        </div>
    )
  }

  if (error) {
    return (
        <Text text={error} variant={TextVariants.ERROR} />
    )
  }

  return (
      <div className={classNames([cls.commentsList, className])}>
          {comments?.length
            ? comments?.map((comment, id) => (
                <CommentCard
                    key={id}
                    comment={comment}
                    className={cls.comment}
                    isLoading={isLoading}
                />
            ))
            : <Text text={t('No comments yet!')} />
          }
      </div>
  )
})
