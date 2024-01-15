import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'

import { useFetchArticleById } from '@/entities/Article'
import { getUserAuthDate } from '@/entities/User'

import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Card } from '@/shared/ui/redesigned/Card'

export const ArticleAdditionalContainer = memo(() => {
    const { id } = useParams<{ id: string }>()
    const { data: article, isLoading } = useFetchArticleById(id as string)
    const authData = useAppSelector(getUserAuthDate)

    return (
        <Card
            padding={'24'}
            border={'round'}
        >
            <ArticleAdditionalInfo
                article={article}
                userId={authData?.id}
                isLoading={isLoading}
            />
        </Card>
    )
})
