import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { Page } from '@/widgets/Page'

import { ArticleRating } from '@/features/ArticleRating'
import { ArticleSingleRecommendations } from '@/features/ArticleSingleRecommendations'

import { useFetchArticleById } from '@/entities/Article'

import { StickyLayout } from '@/shared/layouts/StickyLayout'
import { classNames } from '@/shared/lib'
import { Card } from '@/shared/ui/redesigned/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { ArticleAdditionalContainer } from '../ArticleAdditionalContainer/ArticleAdditionalContainer'
import { ArticleDetailsContainer } from '../ArticleDetailsContainer/ArticleDetailsContainer'
import { ArticleSingleComments } from '../ArticleSingleComments/ArticleSingleComments'

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
                    variant={'error'}
                    align={'center'}
                />
            </Page>
        )
    }

    return (
        <Page className={classNames([className])}>
            <StickyLayout
                content={
                    <Card
                        padding={'24'}
                        border={'round'}
                    >
                        <VStack gap={'16'}>
                            <ArticleDetailsContainer />
                            <ArticleRating articleId={id} />
                            <ArticleSingleRecommendations />
                            <ArticleSingleComments id={id} />
                        </VStack>
                    </Card>
                }
                right={<ArticleAdditionalContainer />}
            />
        </Page>
    )
}

export default memo(ArticleSinglePage)
