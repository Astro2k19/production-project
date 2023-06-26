import React, { memo, useCallback } from 'react'
import cls from './ArticlesInfinite.module.scss'
import { type ArticlesListView, ArticlesListVirtualized } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListView
} from '../../model/selectors/articlesPageList'
import {
  articlesListSelectors,
  articlesPageActions, articlesPageReducer
} from '../../model/slice/articlesPageListSlice/articlesPageListSlice'
import { fetchNextArticlesPart } from '../../model/services/fetchNextArticlesPart/fetchNextArticlesPart'
import { useFetchData } from 'shared/lib/hooks/useFetchData'
import {
  setInitialArticlesListState
} from '../../model/services/setInitialArticlesListState/setInitialArticlesListState'
import { ArticlesFilters } from 'features/articlesFilters'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'

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
