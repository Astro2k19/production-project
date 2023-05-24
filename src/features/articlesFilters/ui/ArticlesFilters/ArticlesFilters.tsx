import { memo, useCallback } from 'react'
import cls from './ArticlesFilters.module.scss'
import { classNames } from 'shared/lib'
import { ArticlesListViewSwitcher } from '../ArticlesListViewSwitcher/ArticlesListViewSwitcher'
import { type ArticlesListView, type ArticleType } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ArticlesFiltersSelectors } from '../ArticlesFiltersSelectors/ArticlesFiltersSelectors'
import { Card } from 'shared/ui/card/Card'
import { Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { articlesFiltersActions } from '../../model/slice/articlesFiltersSlice'
import { type ArticlesSortFields } from '../../model/types/articleFilters'
import { type SortOrder } from 'shared/types/sortOrder'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import {
  getArticlesFiltersOrder, getArticlesFiltersSearch,
  getArticlesFiltersSort, getArticlesFiltersType
} from '../../model/selectors/articlesFiltersSelectors'
import { fetchArticlesList } from 'pages/Articles/model/services/fetchArticlesList/fetchArticlesList'
import {
  articlesPageActions,
  articlesPageReducer
} from 'pages/Articles/model/slice/articlesPageListSlice/articlesPageListSlice'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { ArticleTabTypes } from '../ArticlesTabTypes/ArticleTabTypes'
import { getArticlesListView } from 'pages/Articles/model/selectors/articlesPageList'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'

interface ArticlesFiltersProps {
  className?: string
  // view: ArticlesListView
  // onChangeListView: (view: ArticlesListView) => void
}

export const ArticlesFilters = memo(({ className }: ArticlesFiltersProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const sort = useAppSelector(getArticlesFiltersSort)
  const order = useAppSelector(getArticlesFiltersOrder)
  const search = useAppSelector(getArticlesFiltersSearch)
  const articleType = useAppSelector(getArticlesFiltersType)
  const view = useAppSelector(getArticlesListView)

  console.log(view, 'view')

  const fetchPosts = useCallback(() => {
    dispatch(articlesPageActions.setPage(1))
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

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

  const onChangeListView = useCallback((view: ArticlesListView) => {
    dispatch(articlesPageActions.setArticlesView(view))
  }, [dispatch])

  return (
      <div className={classNames([cls.articlesFilters, className])}>
          <div className={cls.sortWrapper}>
              <ArticlesFiltersSelectors sort={sort} order={order} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
              <ArticlesListViewSwitcher view={view} onChangeView={onChangeListView} />
          </div>
          <Card>
              <Input placeholder={t('Search')} value={search} onChange={onChangeSearch}/>
          </Card>
          <ArticleTabTypes
                  onChangeType={onChangeType}
                  articleType={articleType}
                  className={cls.tabs}
              />
      </div>
  )
})
