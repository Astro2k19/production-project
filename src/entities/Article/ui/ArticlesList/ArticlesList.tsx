import { type FC, type HTMLAttributeAnchorTarget, type ReactNode, useState } from 'react'
import cls from './ArticlesList.module.scss'
import { classNames } from 'shared/lib'
import { type Article, ArticlesListView } from '../../model/types/article'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton'
import { Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso'
import { ArticlesFilters } from 'features/articlesFilters/ui/ArticlesFilters/ArticlesFilters'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { articlesPageReducer } from 'pages/Articles/model/slice/articlesPageListSlice/articlesPageListSlice'

interface ArticlesListProps {
  className?: string
  articles: Article[]
  view?: ArticlesListView
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
  onReachEnd: () => void
}

const reducer: ReducersList = {
  articlesPageList: articlesPageReducer
}

const Header = () => <ArticlesFilters />

export const ArticlesList: FC<ArticlesListProps> = (props) => {
  const {
    className,
    articles,
    view = ArticlesListView.LIST,
    isLoading,
    target,
    onReachEnd
  } = props
  const { t } = useTranslation()
  const [initialArticleIndex, setInitialArticleIndex] = useState(1)

  const renderArticleItem = (index: number, article: Article) => {
    return (
        <ArticlesListItem
          article={article}
          view={view}
          target={target}
          className={cls.card}
          key={article.id}
    />
    )
  }

  const getElementSkeleton = () => {
    return new Array(3)
      .fill(0)
      .map((item, index) => <ArticlesListItemSkeleton view={ArticlesListView.LIST} key={index} />)
  }

  const Footer = () => {
    if (isLoading) {
      return <div>{getElementSkeleton()}</div>
    }

    return null
  }

  if (!isLoading && articles.length === 0) {
    return (
        <Text title={t("Such articles doesn't exist")} />
    )
  }

  console.log(articles)

  return (
      <div className={classNames([cls.articlesList, className, cls[view]])}>

          {view === ArticlesListView.LIST
            ? (
                <Virtuoso
                      style={{ height: '100%' }}
                      totalCount={articles.length}
                      data={articles}
                      itemContent={renderArticleItem}
                      initialTopMostItemIndex={initialArticleIndex}
                      endReached={onReachEnd}
                      components={{
                        Header,
                        Footer
                        // Scroller
                      }}
                  />
              )
            : (
                <VirtuosoGrid
                      style={{ height: '100%' }}
                      totalCount={articles.length}
                      components={{
                        ScrollSeekPlaceholder: () => (
                            <ArticlesListItemSkeleton view={ArticlesListView.GRID} />
                        )
                      }}
                      itemContent={renderArticleItem}
                      itemClassName={cls.gridListItem}
                      listClassName={cls.gridList}
                      scrollSeekConfiguration={{
                        enter: velocity => Math.abs(velocity) > 200,
                        exit: velocity => Math.abs(velocity) < 30
                      }}
                  />
              )}
          {/* {articles.length */}
          {/*  ? articles.map(renderArticleItem) */}
          {/*  : null */}
          {/* } */}
          {/* {isLoading && getElementSkeleton(view)} */}
      </div>
  )
}
