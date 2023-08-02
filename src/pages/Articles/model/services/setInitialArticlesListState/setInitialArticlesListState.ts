import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { ArticlesListView, type ArticleType } from 'entities/Article'
import { ARTICLES_LIST_VIEW_KEY } from 'shared/const/localStorage'
import { getArticlesInited } from '../../selectors/articlesPageList'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slice/articlesPageListSlice/articlesPageListSlice'
import { type SortOrder } from 'shared/types/sortOrder'
import { getUrlQueryParams } from 'shared/lib'
import { articlesFiltersActions, type ArticlesSortFields } from 'features/articlesFilters'

export interface InitialArticlesListState {
  initialView: ArticlesListView
  initialLimit: number
}

export const setInitialArticlesListState = createAsyncThunk<undefined, undefined, AsyncThunkConfig>(
  'articlesPageList/setInitialArticlesListState',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI

    const inited = getArticlesInited(getState())

    if (!inited) {
      const initialView = JSON.parse(localStorage.getItem(
        ARTICLES_LIST_VIEW_KEY) as ArticlesListView
      ) || ArticlesListView.LIST
      const initialLimit = initialView === ArticlesListView.GRID ? 9 : 4
      const urlQueryParams = getUrlQueryParams(false) as URLSearchParams

      urlQueryParams.forEach((value, key) => {
        switch (key) {
          case 'sort':
            dispatch(articlesFiltersActions.setSort(value as ArticlesSortFields))
            break
          case 'order':
            dispatch(articlesFiltersActions.setOrder(value as SortOrder))
            break
          case 'search':
            dispatch(articlesFiltersActions.setSearch(value))
            break
          case 'type':
            dispatch(articlesFiltersActions.setType(value as ArticleType))
            break
        }
      })

      dispatch(articlesPageActions.setInitial({ initialView, initialLimit }))
      dispatch(fetchArticlesList({}))
    }

    return undefined
  })
