import { type FC, type HTMLAttributeAnchorTarget, type MutableRefObject, useEffect, useRef } from 'react'
import cls from './ArticlesList.module.scss'
import { classNames } from 'shared/lib'
import { type Article, ArticlesListView } from '../../model/types/article'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton'
import { Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type Components, Virtuoso, VirtuosoGrid, type VirtuosoGridHandle, type VirtuosoHandle } from 'react-virtuoso'
import { INITIAL_TOP_ARTICLES_INDEX_KEY } from 'shared/const/localStorage'

interface ArticlesListProps {
  className?: string
  articles: Article[]
  view?: ArticlesListView
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
  onReachEnd?: () => void
  Header?: Components['Header']
}

export const ArticlesListVirtualized: FC<ArticlesListProps> = (props) => {
  const {
    className,
    articles,
    view = ArticlesListView.GRID,
    isLoading,
    target,
    onReachEnd,
    Header
  } = props
  const { t } = useTranslation()
  // const [initialArticleIndex, setInitialArticleIndex] = useState(0)
  // const [initialArticleIndex, setInitialArticleIndex] = useState()
  const virtuoso = useRef<VirtuosoHandle>(null)
  const virtuosoGrid = useRef<VirtuosoGridHandle>(null)

  useEffect(() => {
    const index = sessionStorage.getItem(INITIAL_TOP_ARTICLES_INDEX_KEY) ?? 1
    let timeout: NodeJS.Timeout

    if (view === 'LIST' && virtuoso.current) {
      timeout = setTimeout(() => {
        scrollToElement(virtuoso, +index)
      }, 300)
    } else if (view === 'GRID' && virtuosoGrid.current) {
      timeout = setTimeout(() => {
        scrollToElement(virtuosoGrid, +index)
      }, 300)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const scrollToElement = (virtuoso: MutableRefObject<VirtuosoHandle | VirtuosoGridHandle | null>, index: number) => {
    virtuoso.current?.scrollToIndex({
      index,
      align: 'center',
      behavior: 'smooth'
    })
  }

  const renderArticleItem = (index: number, article: Article) => (
      <ArticlesListItem
          article={article}
          view={view}
          target={target}
          className={cls.card}
          key={article.id}
          index={index}
      />
  )

  const getElementSkeleton = (view: ArticlesListView) => {
    const length = view === 'LIST' ? 3 : 9

    return new Array(length)
      .fill(0)
      .map((item, index) => {
        const mods = {
          [cls.gridListItem]: view === 'GRID'
        }

        return(<ArticlesListItemSkeleton
          view={view}
          key={index}
          className={classNames([cls.card, cls.skeleton], mods)}
        />)
      })
  }
  const Footer = () => {
    if (isLoading) {
      return <div className={cls.gridList}>{getElementSkeleton(view)}</div>
    }

    return null
  }

  if (!isLoading && articles.length === 0) {
    return (
        <>
            {Header ? <Header /> : null}
            <Text title={t("Such articles doesn't exist")} />
        </>
    )
  }

  return (
      <div className={classNames([cls.articlesList, className, cls[view]])}>
          {view === ArticlesListView.LIST
            ? (
                <Virtuoso
                      style={{ height: '100%', overflowX: 'hidden' }}
                      data={articles}
                      itemContent={renderArticleItem}
                      endReached={onReachEnd}
                      components={{
                        ...(Header ? { Header } : {}),
                        Footer
                      }}
                      ref={virtuoso}
                  />
              )
            : (
                <VirtuosoGrid
                      style={{ height: '100%' }}
                      data={articles}
                      totalCount={articles.length}
                      itemContent={renderArticleItem}
                      endReached={onReachEnd}
                      components={{
                        ...(Header ? { Header } : {}),
                        Footer
                        // ScrollSeekPlaceholder: () => (
                        //     <ArticlesListItemSkeleton
                        //         view={ArticlesListView.GRID}
                        //         className={cls.gridListItem}
                        //     />
                        // )
                      }}
                      itemClassName={cls.gridListItem}
                      listClassName={cls.gridList}
                      // scrollSeekConfiguration={{
                      //   enter: (velocity: number) => Math.abs(velocity) > 200,
                      //   exit: (velocity: number) => Math.abs(velocity) < 30
                      // }}
                      ref={virtuosoGrid}
                  />
              )}
      </div>
  )
}
