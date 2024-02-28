import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from '@/entities/Article'

import { Text } from '@/shared/ui/redesigned/Text'

interface DetailsContainerProps {
    className?: string
}

export const ArticleDetailsContainer = memo(
    ({ className }: DetailsContainerProps) => {
        const { id } = useParams<{ id: string }>()
        const { t } = useTranslation()

        if (!id) {
            return <Text text={t('UNKNOWN_ARTICLE_ERROR')} />
        }

        return <ArticleDetails id={id} />
    },
)
