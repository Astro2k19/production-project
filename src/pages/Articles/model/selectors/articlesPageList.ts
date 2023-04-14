import { type StoreSchema } from 'app/providers/storeProvider'
import { articlesListAdapter, articlesPageListSlice } from '../slice/articlesPageListSlice/articlesPageListSlice'

export const articlesListSelectors = articlesListAdapter.getSelectors<StoreSchema>(
  state => state.articlesPageList ?? articlesPageListSlice.getInitialState()
)

export const getArticlesListIsLoading = (state: StoreSchema) => state.articlesPageList?.isLoading
export const getArticlesListError = (state: StoreSchema) => state.articlesPageList?.error
export const getArticlesListView = (state: StoreSchema) => state.articlesPageList?.view
