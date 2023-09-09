import React, { memo, useCallback } from 'react'
import { ArticlesFilters, getArticlesFiltersType } from 'src/features/ArticlesFilters'

import {
  getArticlesListError, getArticlesListHasMore,
  getArticlesListIsLoading,
  getArticlesListView
} from '../../model/selectors/articlesPageList'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { fetchNextArticlesPart } from '../../model/services/fetchNextArticlesPart/fetchNextArticlesPart'
import {
  setInitialArticlesListState
} from '../../model/services/setInitialArticlesListState/setInitialArticlesListState'
import {
  articlesListSelectors,
  articlesPageActions, articlesPageReducer
} from '../../model/slice/articlesPageListSlice/articlesPageListSlice'

import { type ArticlesListView, ArticlesListVirtualized } from '@/entities/Article'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { useFetchData } from '@/shared/lib/hooks/useFetchData/useFetchData'

import cls from './ArticlesInfinite.module.scss'

interface ArticleInfiniteListProps {
  className?: string
}

const reducer: ReducersList = {
  articlesPageList: articlesPageReducer
}

export const ArticlesInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(getArticlesListIsLoading)
  // eslint-disable-next-line
  const error = useAppSelector(getArticlesListError)
  const articles = useAppSelector(articlesListSelectors.selectAll)
  const view = useAppSelector(getArticlesListView)
  const hasMore = useAppSelector(getArticlesListHasMore)
  const articlesType = useAppSelector(getArticlesFiltersType)

  const loadNextArticles = useCallback(() => {
    console.log('end reached')
    dispatch(fetchNextArticlesPart())
  }, [dispatch])

  const onChangeListView = useCallback((view: ArticlesListView) => {
    dispatch(articlesPageActions.setArticlesView(view))
  }, [dispatch])

  useFetchData(() => {
    dispatch(setInitialArticlesListState())
  })

  const Header = useCallback(() => {
    return (
        <ArticlesFilters
                view={view}
                onChangeListView={onChangeListView}
                className={cls.articlesFilter}
                fetchArticlesList={fetchArticlesList}
            />
    )
  }, [view, onChangeListView])

  console.log(articles, 'articles')

  return (
      <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
          <ArticlesListVirtualized
              articles={articles}
              isLoading={isLoading}
              articlesType={articlesType}
              hasMore={hasMore}
              view={view}
              onReachEnd={loadNextArticles}
              Header={Header}
          />
      </DynamicModuleLoader>
  )
})
