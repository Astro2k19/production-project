import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { ArticleDetailsDeprecated } from '../ArticleDetailsDeprecated/ArticleDetailsDeprecated'
import { ArticleDetailsRedesigned } from '../ArticleDetailsRedesigned/ArticleDetailsRedesigned'

interface ArticleDetailsProps {
    className?: string
    id: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<ArticleDetailsRedesigned {...props} />}
            off={<ArticleDetailsDeprecated {...props} />}
        />
    )
})
