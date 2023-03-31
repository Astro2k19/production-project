import { memo } from 'react'
import cls from './CommentsList.module.scss'
import { classNames } from 'shared/lib'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard'
import { Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface CommentsListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentsList = memo(({ className, comments, isLoading }: CommentsListProps) => {
  const { t } = useTranslation('translation')

  return (
      <div className={classNames([cls.commentsList, className])}>
          {comments?.length
            ? comments.map((comment, id) => (
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
