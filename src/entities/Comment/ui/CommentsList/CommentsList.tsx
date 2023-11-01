import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'
import { Text, TextAligns, TextVariants } from '@/shared/ui/Text'

import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import cls from './CommentsList.module.scss'

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
                <div className={classNames([cls.commentsList, className])}>
                    {new Array(3).fill(null).map((_, index) => (
                        <CommentCard
                            key={index}
                            isLoading
                        />
                    ))}
                </div>
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
            <div className={classNames([cls.commentsList, className])}>
                {comments?.length ? (
                    comments?.map((comment, id) => (
                        <CommentCard
                            key={id}
                            comment={comment}
                            className={cls.comment}
                            isLoading={isLoading}
                        />
                    ))
                ) : (
                    <Text text={t('No comments yet!')} />
                )}
            </div>
        )
    },
)
