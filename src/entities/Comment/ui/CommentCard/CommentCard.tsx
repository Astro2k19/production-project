import { memo } from 'react'

import { getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Text } from '@/shared/ui/deprecated/Text'

import { type Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        if (isLoading) {
            return (
                <div
                    className={classNames([
                        cls.commentCard,
                        className,
                        cls.loading,
                    ])}
                >
                    <div className={cls.header}>
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius={'50%'}
                        />
                        <Skeleton
                            width={100}
                            height={20}
                        />
                    </div>
                    <Skeleton
                        width={'100%'}
                        height={15}
                    />
                </div>
            )
        }

        if (!comment) {
            return null
        }

        return (
            <div
                className={classNames([cls.commentCard, className])}
                data-testid={'CommentCard'}
            >
                <AppLink
                    to={getRouteProfile(comment.user.id)}
                    className={cls.header}
                >
                    <Avatar
                        src={comment.user.avatar}
                        alt={comment.user.username}
                        size={30}
                    />
                    <Text title={comment.user.username} />
                </AppLink>
                <Text text={comment.text} />
            </div>
        )
    },
)
