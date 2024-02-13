import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { RatingCard } from '@/entities/Rating'
import { getUserAuthDate } from '@/entities/User'

import { ToggleFeatures } from '@/shared/lib/features'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

import {
    useGetArticleRating,
    usePostArticleRating,
} from '../../api/articleRatingApi'

export interface ArticleRatingProps {
    className?: string
    articleId: string
    withPortal?: boolean
}

const ArticleRating = memo(
    ({ className, articleId, withPortal = true }: ArticleRatingProps) => {
        const { t } = useTranslation()
        const userData = useAppSelector(getUserAuthDate)
        const { data, isLoading } = useGetArticleRating({
            userId: userData?.id ?? '',
            articleId,
        })

        const [postArticleRating] = usePostArticleRating()

        const rating = data?.at(0)

        const handleRateArticle = useCallback(
            (rate: number, feedback?: string) => {
                try {
                    postArticleRating({
                        userId: userData?.id ?? '',
                        articleId,
                        rate,
                        feedback,
                    })
                } catch (e) {
                    console.log(e)
                }
            },
            [articleId, postArticleRating, userData?.id],
        )

        const onAccept = useCallback(
            (rate: number, feedback: string) => {
                handleRateArticle(rate, feedback)
            },
            [handleRateArticle],
        )

        const onCancel = useCallback(
            (rate: number) => {
                handleRateArticle(rate)
            },
            [handleRateArticle],
        )

        if (isLoading) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Skeleton
                            width={'100%'}
                            height={126}
                            borderRadius={'32px'}
                        />
                    }
                    off={
                        <SkeletonDeprecated
                            width={'100%'}
                            height={126}
                        />
                    }
                />
            )
        }

        return (
            <RatingCard
                title={t('How do you like the article?', { ns: 'article' })}
                feedbackTitle={t('Please, leave a feedback!')}
                onAccept={onAccept}
                onCancel={onCancel}
                className={className}
                rate={rating?.rate}
                withPortal={withPortal}
            />
        )
    },
)

export default ArticleRating
