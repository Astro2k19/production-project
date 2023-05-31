import React, { type FC, memo, useCallback } from 'react'
import cls from './Articles.module.scss'
import { ArticlesListVirtualized } from 'entities/Article/ui/ArticlesList/ArticlesListVirtualized'
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
import { fetchNextArticlesPart } from '../model/services/fetchNextArticlesPart/fetchNextArticlesPart'
import { setInitialArticlesListState } from '../model/services/setInitialArticlesListState/setInitialArticlesListState'
import { ArticlesFilters } from 'features/articlesFilters/ui/ArticlesFilters/ArticlesFilters'
import { Page } from 'widgets/Page/Page'

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
          <Page>
              <ArticlesListVirtualized
              articles={articles}
              isLoading={isLoading}
              view={view}
              onReachEnd={loadNextArticles}
              Header={Header}
          />
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
