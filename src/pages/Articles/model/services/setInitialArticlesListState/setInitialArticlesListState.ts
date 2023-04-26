import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { ArticlesListView } from 'entities/Article'
import { ARTICLES_LIST_VIEW_KEY } from 'shared/const/localStorage'
import { getArticlesInited } from '../../selectors/articlesPageList'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slice/articlesPageListSlice/articlesPageListSlice'

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
      ) || ArticlesListView.GRID
      const initialLimit = initialView === ArticlesListView.GRID ? 9 : 4

      dispatch(articlesPageActions.setInitial({ initialView, initialLimit }))
      dispatch(fetchArticlesList({
        page: 1
      }))
    }
  })
