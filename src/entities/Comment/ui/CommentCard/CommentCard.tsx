import { memo } from 'react'

import { getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features'
import { toggleFeature } from '@/shared/lib/features/lib/toggleFeatures'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { type Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        const Skeleton = toggleFeature({
            name: 'isAppRedesigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
        })

        if (isLoading) {
            return (
                <Skeleton
                    width={'100%'}
                    height={'96px'}
                    borderRadius={'32px'}
                />
            )
        }

        if (!comment) {
            return null
        }

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card
                        padding={'16'}
                        border={'round'}
                        inverted
                    >
                        <VStack
                            className={classNames([className])}
                            data-testid={'CommentCard'}
                            gap={'8'}
                        >
                            <AppLink to={getRouteProfile(comment.user.id)}>
                                <HStack
                                    gap={'8'}
                                    alignItems={'center'}
                                >
                                    <Avatar
                                        src={comment.user.avatar}
                                        alt={comment.user.username}
                                        size={30}
                                    />
                                    <Text
                                        title={comment.user.username}
                                        bold
                                    />
                                </HStack>
                            </AppLink>
                            <Text text={comment.text} />
                        </VStack>
                    </Card>
                }
                off={
                    <div
                        className={classNames([cls.commentCard, className])}
                        data-testid={'CommentCard'}
                    >
                        <AppLinkDeprecated
                            to={getRouteProfile(comment.user.id)}
                            className={cls.header}
                        >
                            <AvatarDeprecated
                                src={comment.user.avatar}
                                alt={comment.user.username}
                                size={30}
                            />
                            <TextDeprecated title={comment.user.username} />
                        </AppLinkDeprecated>
                        <TextDeprecated text={comment.text} />
                    </div>
                }
            />
        )
    },
)
