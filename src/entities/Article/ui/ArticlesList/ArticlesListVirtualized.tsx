import { type FC, type HTMLAttributeAnchorTarget, useEffect, useRef, useState } from 'react'
import cls from './ArticlesList.module.scss'
import { classNames } from 'shared/lib'
import { type Article } from '../../model/types/article'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton'
import { Button, ButtonVariants, Loader, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type Components, Virtuoso, VirtuosoGrid, type VirtuosoGridHandle, type VirtuosoHandle } from 'react-virtuoso'
import { ArticlesListView, type ArticleType } from '../../model/conts/articleConts'
import { HStack } from 'shared/ui/stack'

interface ArticlesListProps {
  className?: string
  articles: Article[]
  articlesType: ArticleType
  view?: ArticlesListView
  isLoading?: boolean
  hasMore?: boolean
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
    hasMore,
    articlesType,
    target,
    onReachEnd,
    Header
  } = props
  const { t } = useTranslation()
  // const [initialArticleIndex, setInitialArticleIndex] = useState(0)
  // const [initialArticleIndex, setInitialArticleIndex] = useState()
  const virtuoso = useRef<VirtuosoHandle>(null)
  const virtuosoGrid = useRef<VirtuosoGridHandle>(null)
  const [inited, setInited] = useState(false)

  // useEffect(() => {
  //   const index = sessionStorage.getItem(INITIAL_TOP_ARTICLES_INDEX_KEY) ?? 1
  //   let timeout: NodeJS.Timeout
  //
  //   if (view === 'LIST' && virtuoso.current) {
  //     timeout = setTimeout(() => {
  //       scrollToElement(virtuoso, +index)
  //     }, 300)
  //   } else if (view === 'GRID' && virtuosoGrid.current) {
  //     timeout = setTimeout(() => {
  //       scrollToElement(virtuosoGrid, +index)
  //     }, 300)
  //   }
  //
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  //   // eslint-disable-next-line
  // }, [])
  //
  // const scrollToElement = (virtuoso: MutableRefObject<VirtuosoHandle | VirtuosoGridHandle | null>, index: number) => {
  //   virtuoso.current?.scrollToIndex({
  //     index,
  //     align: 'center',
  //     behavior: 'smooth'
  //   })
  // }

  useEffect(() => {
    if (inited) {
      setInited(false)
    }
  }, [articlesType])

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

  const getElementSkeleton = (view: ArticlesListView): JSX.Element[] => {
    // const length = view === 'LIST' ? 3 : 9
    const length = 3

    return new Array(length)
      .fill(0)
      .map((item, index) => {
        // const mods = {
        //   [cls.gridListItem]: view === 'GRID'
        // }

        return (
            <ArticlesListItemSkeleton
            view={view}
            key={index}
            className={classNames([cls.card, cls.skeleton])}
          />
        )
      })
  }

  const onClickButton = () => {
    if (onReachEnd) {
      onReachEnd()
      setInited(true)
    }
  }

  const Footer = () => {
    if (!inited && !isLoading && hasMore) {
      return (
          <HStack justify={'center'} className={cls.loadMoreWrapper}>
              <Button variant={ButtonVariants.OUTLINE} onClick={onClickButton}>
                  {t('Load more')}
              </Button>
          </HStack>
      )
    }

    if (isLoading) {
      return view === ArticlesListView.LIST
        ? (
            <div>
                {getElementSkeleton(view)}
            </div>
          )
        : (
            <Loader />
          )
    }

    return null
  }

  if (!isLoading && articles.length === 0) {
    return (
        <>
            {Header && <Header />}
            <Text title={t("Such articles doesn't exist")} />
        </>
    )
  }

  console.log(inited, 'inited')

  return (
      <div className={classNames([cls.articlesList, className, cls[view]])}>
          {view === ArticlesListView.LIST
            ? (
                <Virtuoso
                      style={{ height: '100%', overflowX: 'hidden' }}
                      data={articles}
                      itemContent={renderArticleItem}
                      endReached={inited ? onReachEnd : undefined}
                      components={{
                        ...(Header ? { Header } : {}),
                        Footer
                      }}
                      ref={virtuoso}
                  />
              )
            : (
                <VirtuosoGrid
                      data={articles}
                      itemContent={renderArticleItem}
                      endReached={inited ? onReachEnd : undefined}
                      components={{
                        ...(Header ? { Header } : {}),
                        Footer
                      }}
                      // overscan={200}
                      itemClassName={cls.gridListItem}
                      listClassName={cls.gridList}
                      ref={virtuosoGrid}
                  />
              )}
      </div>
  )
}
