import { Suspense, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { AddCommentForm } from '@/features/AddCommentForm'

import { CommentsList } from '@/entities/Comment'
import { getUserAuthDate } from '@/entities/User'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import {
    useFetchArticleSingleComment,
    useSendArticleSingleComment,
} from '../../api/articleSingleCommentApi'

interface ArticleSingleCommentsProps {
    id: string
    className?: string
}

export const ArticleSingleComments = memo(
    ({ className, id }: ArticleSingleCommentsProps) => {
        const { t } = useTranslation('article')
        const user = useAppSelector(getUserAuthDate)
        const [sendArticleSingleComment, { isLoading: isFetching }] =
            useSendArticleSingleComment()
        const {
            data: comments,
            isLoading,
            error,
        } = useFetchArticleSingleComment(id)

        const onSendComment = useCallback(
            (text: string) => {
                sendArticleSingleComment({
                    articleId: id,
                    text,
                    userId: user?.id,
                })
            },
            [id, sendArticleSingleComment, user?.id],
        )

        return (
            <VStack
                gap={'16'}
                className={classNames([className])}
            >
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text title={t('Comments')} />}
                    off={<TextDeprecated title={t('Comments')} />}
                />
                <Suspense fallback={'Loading...'}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentsList
                    comments={comments}
                    isLoading={isLoading || isFetching}
                    error={error}
                />
            </VStack>
        )
    },
)
