import { type FC, memo, useCallback } from 'react'
import cls from './Articles.module.scss'
import { classNames } from 'shared/lib'
import { ArticlesList } from 'entities/Article/ui/ArticlesList/ArticlesList'
import { type ArticlesListView } from 'entities/Article/model/types/article'
import { useFetchData } from 'shared/lib/hooks/useFetchData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { getArticlesListError, getArticlesListIsLoading, getArticlesListView } from '../model/selectors/articlesPageList'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import {
  articlesListSelectors,
  articlesPageActions,
  articlesPageReducer
} from '../model/slice/articlesPageListSlice/articlesPageListSlice'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesPart } from '../model/services/fetchNextArticlesPart/fetchNextArticlesPart'
import { setInitialArticlesListState } from '../model/services/setInitialArticlesListState/setInitialArticlesListState'
import { ArticlesFilters } from 'features/articlesFilters/ui/ArticlesFilters/ArticlesFilters'
import { useParams, useSearchParams } from 'react-router-dom'
import React from 'react'

interface ArticlesProps {
  className?: string
}

const reducer: ReducersList = {
  articlesPageList: articlesPageReducer
}

const ArticlesPage: FC<ArticlesProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(getArticlesListIsLoading)
  const error = useAppSelector(getArticlesListError)
  const articles = useAppSelector(articlesListSelectors.selectAll)
  const view = useAppSelector(getArticlesListView)

  console.log(view, 'view')

  const loadNextArticles = useCallback(() => {
    dispatch(fetchNextArticlesPart())
  }, [dispatch])

  const onChangeListView = useCallback((view: ArticlesListView) => {
    dispatch(articlesPageActions.setArticlesView(view))
  }, [dispatch])

  useFetchData(() => {
    dispatch(setInitialArticlesListState())
  })
  return (
      <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
          <ArticlesList
              articles={articles}
              isLoading={isLoading}
              view={view}
              onReachEnd={loadNextArticles}
          />
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
