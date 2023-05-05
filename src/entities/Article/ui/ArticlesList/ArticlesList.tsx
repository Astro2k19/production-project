import { type FC, type HTMLAttributeAnchorTarget } from 'react'
import cls from './ArticlesList.module.scss'
import { classNames } from 'shared/lib'
import { type Article, ArticlesListView } from '../../model/types/article'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton'
import { Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface ArticlesListProps {
  className?: string
  articles: Article[]
  view?: ArticlesListView
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
}

const getElementSkeleton = (view: ArticlesListView) => {
  return new Array(view === ArticlesListView.LIST ? 3 : 9)
    .fill(0)
    .map((item, index) => <ArticlesListItemSkeleton view={view} key={index} />)
}

export const ArticlesList: FC<ArticlesListProps> = (props) => {
  const { className, articles, view = ArticlesListView.GRID, isLoading, target } = props
  const { t } = useTranslation()

  const renderArticleItem = (article: Article) => (
      <ArticlesListItem
        article={article}
        view={view}
        target={target}
        key={article.id}
      />
  )

  if (!isLoading && articles.length === 0) {
    return (
        <Text title={t("Such articles doesn't exist")} />
    )
  }

  return (
      <div className={classNames([cls.articlesList, className, cls[view]])}>
          {articles.length
            ? articles.map(renderArticleItem)
            : null
          }
          {isLoading && getElementSkeleton(view)}
      </div>
  )
}
