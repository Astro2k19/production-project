import { type FC, type HTMLAttributeAnchorTarget } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

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
        <ArticlesListItemRedesigned {...props} />
    )
}
