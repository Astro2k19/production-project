import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticlesList } from '@/entities/Article'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { useGetArticleRecommendations } from '../../api/fetchArticleSingleRecommendations'

interface ArticleSingleRecommendationsProps {
    className?: string
}

export const ArticleSingleRecommendations = memo(
    ({ className }: ArticleSingleRecommendationsProps) => {
        const { t } = useTranslation()
        const { data: articles = [], isLoading } =
            useGetArticleRecommendations(undefined)

        return (
            <VStack
                gap={'16'}
                className={classNames([className])}
                data-testid={'ArticleSingleRecommendations'}
            >
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text title={t('Recommendations')} />}
                    off={<TextDeprecated title={t('Recommendations')} />}
                />
                <ArticlesList
                    articles={articles}
                    isLoading={isLoading}
                    target={'_blank'}
                />
            </VStack>
        )
    },
)
