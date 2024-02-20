import { type FC } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { ArticlesListView } from '../../model/const/articleConst'
import { ArticlesListItemSkeletonDeprecated } from './ArticlesListItemSkeletonDeprecated/ArticlesListItemSkeletonDeprecated'
import { ArticlesListItemSkeletonRedesigned } from './ArticlesListItemSkeletonRedesigned/ArticlesListItemSkeletonRedesigned'

export interface ArticlesListItemSkeletonProps {
    view: ArticlesListView
    className?: string
}

export const ArticlesListItemSkeleton: FC<
    ArticlesListItemSkeletonProps
> = props => {
    return (
        <ArticlesListItemSkeletonRedesigned {...props} />
    )
}
