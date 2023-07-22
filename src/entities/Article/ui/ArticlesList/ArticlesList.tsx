import { type FC, type HTMLAttributeAnchorTarget } from 'react'
import cls from './ArticlesList.module.scss'
import { classNames } from 'shared/lib'
import { type Article } from '../../model/types/article'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton'
import { Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { ArticlesListView } from '../../model/conts/articleConts'

interface ArticlesListProps {
  className?: string
  articles?: Article[]
  view?: ArticlesListView
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
}

export const ArticlesList: FC<ArticlesListProps> = (props) => {
  const {
    className,
    articles,
    view = ArticlesListView.GRID,
    isLoading,
    target
  } = props
  const { t } = useTranslation()

  const renderArticleItem = (article: Article) => {
    const mods = {
      [cls.gridListItem]: view === 'GRID'
    }

    return (
        <ArticlesListItem
        article={article}
        view={view}
        target={target}
        className={classNames([cls.card], mods)}
        key={article.id}
    />
    )
  }

  const getElementSkeleton = (view: ArticlesListView) => {
    const length = 4

    console.log(view, 'getElementSkeleton')

    return new Array(length)
      .fill(0)
      .map((item, index) => {
        const mods = {
          [cls.gridListItem]: view === 'GRID'
        }

        return (
            <ArticlesListItemSkeleton
                view={view}
                key={index}
                className={classNames([cls.card, cls.skeleton], mods)}
            />
        )
      })
  }

  console.log('TEST TESET')

  if (!isLoading && articles?.length === 0) {
    return (
        <Text title={t("Such articles doesn't exist")} />
    )
  }

  const mods = {
    [cls.gridList]: view === 'GRID'
  }

  return (
      <div className={classNames([className, cls[view]], mods)}>
          {articles?.length
            ? (
                articles.map(renderArticleItem)
              )
            : null}
          {isLoading && getElementSkeleton(view)}
      </div>
  )
}
