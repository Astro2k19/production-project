import { type AsyncThunk } from '@reduxjs/toolkit'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { type ArticlesSortFields } from '../../model/conts/articleFiltersConst'
import {
  getArticlesFiltersOrder,
  getArticlesFiltersSearch,
  getArticlesFiltersSort,
  getArticlesFiltersType
} from '../../model/selectors/articlesFiltersSelectors'
import { articlesFiltersActions } from '../../model/slice/articlesFiltersSlice'
import { ArticlesFiltersSelectors } from '../ArticlesFiltersSelectors/ArticlesFiltersSelectors'
import { ArticlesListViewSwitcher } from '../ArticlesListViewSwitcher/ArticlesListViewSwitcher'
import { ArticleTabTypes } from '../ArticlesTabTypes/ArticleTabTypes'

import { type ArticlesListView, type ArticleType } from '@/entities/Article'
import { classNames } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { type SortOrder } from '@/shared/types/sortOrder'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { HStack, VStack } from '@/shared/ui/Stack'

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
