import { type FC, type HTMLAttributeAnchorTarget } from 'react'

import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'

import { ArticlesListView } from '../../model/const/articleConst'
import { type Article } from '../../model/types/article'
import { ArticlesListItemDeprecated } from './ArticleListItemDeprecated/ArticlesListItemDeprecated'
import { ArticlesListItemRedesigned } from './ArticleListItemRedesigned/ArticlesListItemRedesigned'

export interface ArticlesListItemProps {
    className?: string
    article: Article
    view: ArticlesListView
    target?: HTMLAttributeAnchorTarget
    index?: number
}

export const ArticlesListItem: FC<ArticlesListItemProps> = props => {
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<ArticlesListItemRedesigned {...props} />}
            off={<ArticlesListItemDeprecated {...props} />}
        />
    )
}
