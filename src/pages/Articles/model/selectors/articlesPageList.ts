import { type StoreSchema } from 'app/providers/storeProvider'
import { ArticlesListView } from 'entities/Article'

export const getArticlesListIsLoading = (state: StoreSchema) => state.articlesPageList?.isLoading
export const getArticlesListError = (state: StoreSchema) => state.articlesPageList?.error
export const getArticlesListView = (state: StoreSchema) => state?.articlesPageList?.view ?? ArticlesListView.LIST
export const getArticlesListLimit = (state: StoreSchema) => state.articlesPageList?.limit ?? 9
export const getArticlesListHasMore = (state: StoreSchema) => state.articlesPageList?.hasMore

export const getArticlesInited = (state: StoreSchema) => state.articlesPageList?._inited
