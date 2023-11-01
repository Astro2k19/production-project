import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { Page } from '@/widgets/Page'

import { ArticleRating } from '@/features/ArticleRating'
import { ArticleSingleRecommendations } from '@/features/ArticleSingleRecommendations'

import { ArticleDetails, useFetchArticleById } from '@/entities/Article'

import { classNames } from '@/shared/lib'
import { getFeatureFlag } from '@/shared/lib/features'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextAligns, TextVariants } from '@/shared/ui/Text'

import { ArticleSingleComments } from '../ArticleSingleComments/ArticleSingleComments'
import { ArticleSingleHeader } from '../ArticleSingleHeader/ArticleSingleHeader'

interface ArticleSingleProps {
    className?: string
}

const ArticleSinglePage: FC<ArticleSingleProps> = ({ className }) => {
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const { error } = useFetchArticleById(id as string)
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled')
    const isArticleRecommendationsEnabled = getFeatureFlag(
        'isArticleRecommendationsEnabled',
    )

    if (!id) {
        return <Text text={t('UNKNOWN_ARTICLE_ERROR')} />
    }

    if (error) {
        return (
            <Page className={classNames([className])}>
                <Text
                    title={t('UNKNOWN_ARTICLE_ERROR')}
                    variant={TextVariants.ERROR}
                    align={TextAligns.CENTER}
                />
            </Page>
        )
    }

    return (
        <Page className={classNames([className])}>
            <VStack gap={'32'}>
                <ArticleSingleHeader />
                <ArticleDetails id={id} />
                {isArticleRecommendationsEnabled && (
                    <ArticleSingleRecommendations />
                )}
                {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                <ArticleSingleComments id={id} />
            </VStack>
        </Page>
    )
}

export default memo(ArticleSinglePage)
