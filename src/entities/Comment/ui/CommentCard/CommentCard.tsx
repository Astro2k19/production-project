import { memo } from 'react'

import { getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { type Comment } from '../../model/types/comment'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        const Skeleton = SkeletonRedesigned

        if (isLoading) {
            return (
                <Skeleton
                    width={'100%'}
                    height={'96px'}
                    borderRadius={'round'}
                />
            )
        }

        if (!comment) {
            return null
        }

        return (
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
        )
    },
)
