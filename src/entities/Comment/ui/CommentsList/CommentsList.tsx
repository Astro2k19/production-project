import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features'
import {
    TextAligns,
    Text as TextDeprecated,
    TextVariants,
} from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentsListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
    error?: FetchBaseQueryError | SerializedError
}

export const CommentsList = memo(
    ({ className, comments, isLoading, error }: CommentsListProps) => {
        const { t } = useTranslation('translation')

        if (isLoading) {
            return (
                <VStack
                    gap={'16'}
                    className={classNames([className])}
                >
                    {new Array(3).fill(null).map((_, index) => (
                        <CommentCard
                            key={index}
                            isLoading
                        />
                    ))}
                </VStack>
            )
        }

        if (error) {
            return (
                <Text
                    text={t('UNKNOWN_COMMENTS_ERROR')}
                    variant={TextVariants.ERROR}
                    align={TextAligns.CENTER}
                />
            )
        }

        return (
            <VStack
                gap={'8'}
                className={classNames([className])}
            >
                {comments?.length ? (
                    comments?.map((comment, id) => (
                        <CommentCard
                            key={id}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    ))
                ) : (
                    <Text text={t('No comments yet!')} />
                )}
            </VStack>
        )
    },
)
