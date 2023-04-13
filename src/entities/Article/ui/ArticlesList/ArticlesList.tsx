import { type FC } from 'react'
import cls from './ArticlesList.module.scss'
import { classNames } from 'shared/lib'
import { type Article, ArticlesListView } from '../../model/types/article'
import { ArticlesListItem } from 'entities/Article/ui/ArticlesListItem/ArticlesListItem'
import { Text } from 'shared/ui'
import { ArticlesListItemSkeleton } from 'entities/Article/ui/ArticlesListItem/ArticlesListItemSkeleton'

interface ArticlesListProps {
  className?: string
  articles: Article[]
  view?: ArticlesListView
  isLoading?: boolean
}

const getElementSkeleton = (view: ArticlesListView) => {
  return new Array(view === ArticlesListView.LIST ? 3 : 9)
    .fill(0)
    .map((item, index) => <ArticlesListItemSkeleton view={view} key={index} />)
}

export const ArticlesList: FC<ArticlesListProps> = (props) => {
  const { className, articles, view = ArticlesListView.GRID, isLoading } = props

  const renderArticleItem = (article: Article) => (
      <ArticlesListItem article={article} view={view} key={article.id} />
  )

  console.log(articles, 'articles')

  if (isLoading) {
    return (
        <div className={classNames([cls.articlesList, className, cls[view]])}>
            {getElementSkeleton(view)}
        </div>
    )
  }

  return (
      <div className={classNames([cls.articlesList, className, cls[view]])}>
          {articles.length
            ? articles.map(renderArticleItem)
            : <Text text={'No articles'} />
          }
      </div>
  )
}
