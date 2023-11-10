import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { Page } from '@/widgets/Page'

import { ArticleRating } from '@/features/ArticleRating'
import { ArticleSingleRecommendations } from '@/features/ArticleSingleRecommendations'

import { ArticleDetails, useFetchArticleById } from '@/entities/Article'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'
import { Card } from '@/shared/ui/deprecated/Card'
import { Text, TextAligns, TextVariants } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { ArticleSingleComments } from '../ArticleSingleComments/ArticleSingleComments'
import { ArticleSingleHeader } from '../ArticleSingleHeader/ArticleSingleHeader'

interface ArticleSingleProps {
    className?: string
}

const ArticleSinglePage: FC<ArticleSingleProps> = ({ className }) => {
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const { error } = useFetchArticleById(id as string)

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
                <ToggleFeatures
                    feature={'isArticleRecommendationsEnabled'}
                    on={<ArticleSingleRecommendations />}
                    off={
                        <Card>
                            {t(
                                'Article recommendations will be accessible soon!',
                            )}
                        </Card>
                    }
                />
                <ToggleFeatures
                    feature={'isArticleRatingEnabled'}
                    on={<ArticleRating articleId={id} />}
                    off={
                        <Card>
                            {t('Article rating will be accessible soon!')}
                        </Card>
                    }
                />
                <ArticleSingleComments id={id} />
            </VStack>
        </Page>
    )
}

export default memo(ArticleSinglePage)
