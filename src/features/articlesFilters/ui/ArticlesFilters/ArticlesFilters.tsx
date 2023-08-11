import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib'
import { ArticlesListViewSwitcher } from '../ArticlesListViewSwitcher/ArticlesListViewSwitcher'
import { type ArticlesListView, type ArticleType } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ArticlesFiltersSelectors } from '../ArticlesFiltersSelectors/ArticlesFiltersSelectors'
import { Card } from 'shared/ui/card/Card'
import { Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { articlesFiltersActions } from '../../model/slice/articlesFiltersSlice'
import { type ArticlesSortFields } from '../../model/conts/articleFiltersConst'
import { type SortOrder } from 'shared/types/sortOrder'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import {
  getArticlesFiltersOrder,
  getArticlesFiltersSearch,
  getArticlesFiltersSort,
  getArticlesFiltersType
} from '../../model/selectors/articlesFiltersSelectors'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { ArticleTabTypes } from '../ArticlesTabTypes/ArticleTabTypes'
import { HStack, VStack } from 'shared/ui/stack'
import { type AsyncThunk } from '@reduxjs/toolkit'

interface ArticlesFiltersProps {
  className?: string
  view: ArticlesListView
  onChangeListView: (view: ArticlesListView) => void
  fetchArticlesList: AsyncThunk<any, any, any>
}

export const ArticlesFilters = memo(({ className, view, onChangeListView, fetchArticlesList }: ArticlesFiltersProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const sort = useAppSelector(getArticlesFiltersSort)
  const order = useAppSelector(getArticlesFiltersOrder)
  const search = useAppSelector(getArticlesFiltersSearch)
  const articleType = useAppSelector(getArticlesFiltersType)

  const fetchPosts = useCallback(() => {
    dispatch(articlesFiltersActions.setPage(1))
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch, fetchArticlesList])

  const debouncedFetchData = useDebounce(fetchPosts, 500)

  const onChangeSort = useCallback((newSort: ArticlesSortFields) => {
    dispatch(articlesFiltersActions.setSort(newSort))
    fetchPosts()
  }, [dispatch, fetchPosts])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesFiltersActions.setOrder(newOrder))
    fetchPosts()
  }, [dispatch, fetchPosts])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesFiltersActions.setSearch(search))
    debouncedFetchData()
  }, [debouncedFetchData, dispatch])

  const onChangeType = useCallback((newType: ArticleType) => {
    dispatch(articlesFiltersActions.setType(newType))
    fetchPosts()
  }, [dispatch, fetchPosts])

  return (
      <VStack gap={'16'} className={classNames([className])}>
          <HStack justify={'spaceBetween'}>
              <ArticlesFiltersSelectors sort={sort} order={order} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
              <ArticlesListViewSwitcher view={view} onChangeView={onChangeListView} />
          </HStack>
          <Card>
              <Input placeholder={t('Search')} value={search} onChange={onChangeSearch}/>
          </Card>
          <ArticleTabTypes
                  onChangeType={onChangeType}
                  articleType={articleType}
          />
      </VStack>
  )
})
