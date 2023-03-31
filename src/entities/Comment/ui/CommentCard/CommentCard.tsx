import { memo } from 'react'
import cls from './CommentCard.module.scss'
import { classNames } from 'shared/lib'
import { type Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { Text } from 'shared/ui'
import { Skeleton } from 'shared/ui/skeleton/Skeleton'

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
        <div className={classNames([cls.commentCard, className])}>
            <div className={cls.header}>
                <Skeleton width={30} height={30} borderRadius={'50%'} />
                <Skeleton width={100} height={20} />
            </div>
            <Skeleton width={'100%'} height={15} />
        </div>
    )
  }

  return (
      <div className={classNames([cls.commentCard, className])}>
          <div className={cls.header}>
              <Avatar src={comment.user.avatar} alt={comment.user.username} size={30} />
              <Text title={comment.user.username} />
          </div>
          <Text text={comment.text} />
      </div>
  )
})
