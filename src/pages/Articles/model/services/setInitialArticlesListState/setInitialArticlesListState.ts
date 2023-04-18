import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AsyncThunkConfig } from 'app/providers/storeProvider'
import { ArticlesListView } from 'entities/Article'
import { ARTICLES_LIST_VIEW_KEY } from 'shared/const/localStorage'

interface InitialArticlesListState {
  initialView: ArticlesListView
  initialLimit: number
}

export const setInitialArticlesListState = createAsyncThunk<InitialArticlesListState, undefined, AsyncThunkConfig>(
  'articlesPageList/setInitialArticlesListState',
  async () => {
    const initialView = JSON.parse(localStorage.getItem(
      ARTICLES_LIST_VIEW_KEY) as ArticlesListView
    ) || ArticlesListView.GRID
    const initialLimit = initialView === ArticlesListView.GRID ? 9 : 4

    return { initialView, initialLimit }
  })
