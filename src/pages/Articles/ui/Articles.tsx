import { type FC, memo, useCallback } from 'react'
import cls from './Articles.module.scss'
import { classNames } from 'shared/lib'
import { ArticlesList } from 'entities/Article/ui/ArticlesList/ArticlesList'
import { type ArticlesListView } from 'entities/Article/model/types/article'
import { useFetchData } from 'shared/lib/hooks/useFetchData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import {
  articlesListSelectors,
  getArticlesListError,
  getArticlesListIsLoading, getArticlesListView
} from '../model/selectors/articlesPageList'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { articlesPageActions, articlesPageReducer } from '../model/slice/articlesPageListSlice/articlesPageListSlice'
import { ArticlesListViewSwitcher } from 'features/articlesListViewSwitcher/ui/ArticlesListViewSwitcher'

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

  const onChangeListView = useCallback((view: ArticlesListView) => {
    dispatch(articlesPageActions.setArticlesView(view))
  }, [dispatch])

  useFetchData(() => {
    dispatch(fetchArticlesList())
  })

  return (
      // when a user leaves the page then reducer is removed after unmounting and VIEW is not saved,
      // when we go to this page again it uses the default value
      <DynamicModuleLoader reducers={reducer}>
          <div className={classNames([cls.articles, className])}>
              <ArticlesListViewSwitcher view={view} onChangeView={onChangeListView} />
              <ArticlesList articles={articles} isLoading={isLoading} view={view} />
          </div>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
