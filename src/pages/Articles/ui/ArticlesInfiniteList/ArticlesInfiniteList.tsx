import React, { memo, useCallback } from 'react'
import cls from './ArticlesInfinite.module.scss'
import { type ArticlesListView, ArticlesListVirtualized } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { useFetchData } from 'shared/lib/hooks/useFetchData'

import {
  ArticlesFilters,
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListView
} from 'features/articlesFilters'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { articlesPageReducer } from 'features/articlesFilters/model/slice/articlesPageListSlice/articlesPageListSlice'

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

  const loadNextArticles = useCallback(() => {
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
            />
    )
  }, [view, onChangeListView])

  return (
      <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
          <ArticlesListVirtualized
              articles={articles}
              isLoading={isLoading}
              view={view}
              onReachEnd={loadNextArticles}
              Header={Header}
          />
      </DynamicModuleLoader>
  )
})
