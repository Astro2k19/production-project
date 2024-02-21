import { type FC } from 'react'

import { ArticlesListView } from '../../model/const/articleConst'
import { ArticlesListItemSkeletonRedesigned } from './ArticlesListItemSkeletonRedesigned/ArticlesListItemSkeletonRedesigned'

export interface ArticlesListItemSkeletonProps {
    view: ArticlesListView
    className?: string
}

export const ArticlesListItemSkeleton: FC<
    ArticlesListItemSkeletonProps
> = props => {
    return <ArticlesListItemSkeletonRedesigned {...props} />
}
