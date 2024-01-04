import { type FC } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { ArticlesListView } from '../../model/const/articleConst'
import { ArticlesListItemDeprecatedSkeleton } from './ArticlesListItemDeprecatedSkeleton/ArticlesListItemDeprecatedSkeleton'
import { ArticlesListItemRedesignedSkeleton } from './ArticlesListItemRedesignedSkeleton/ArticlesListItemRedesignedSkeleton'

export interface ArticlesListItemSkeletonProps {
    view: ArticlesListView
    className?: string
}

export const ArticlesListItemSkeleton: FC<
    ArticlesListItemSkeletonProps
> = props => {
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<ArticlesListItemRedesignedSkeleton {...props} />}
            off={<ArticlesListItemDeprecatedSkeleton {...props} />}
        />
    )
}
