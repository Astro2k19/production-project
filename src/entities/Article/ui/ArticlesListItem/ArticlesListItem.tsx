import { type FC, type HTMLAttributeAnchorTarget } from 'react'

import { ArticlesListView } from '../../model/const/articleConst'
import { type Article } from '../../model/types/article'
import { ArticlesListItemRedesigned } from './ArticleListItemRedesigned/ArticlesListItemRedesigned'

export interface ArticlesListItemProps {
    className?: string
    article: Article
    view: ArticlesListView
    target?: HTMLAttributeAnchorTarget
    index?: number
}

export const ArticlesListItem: FC<ArticlesListItemProps> = props => {
    return <ArticlesListItemRedesigned {...props} />
}
