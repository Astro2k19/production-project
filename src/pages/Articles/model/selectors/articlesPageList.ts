import { type StoreSchema } from '@/app/providers/storeProvider'

import { ArticlesListView } from '@/entities/Article'

import { buildSelector } from '@/shared/lib/store/buildSelector'

export const getArticlesListIsLoading = (state: StoreSchema) =>
    state.articlesPageList?.isLoading
export const getArticlesListError = (state: StoreSchema) =>
    state.articlesPageList?.error
export const getArticlesListView = (state: StoreSchema) =>
    state?.articlesPageList?.view ?? ArticlesListView.LIST
export const getArticlesListLimit = (state: StoreSchema) =>
    state.articlesPageList?.limit ?? 9
export const getArticlesListHasMore = (state: StoreSchema) =>
    state.articlesPageList?.hasMore

export const getArticlesInited = (state: StoreSchema) =>
    state.articlesPageList?._inited

export const [useGetArticlesFiltersSort, getArticlesFiltersSort] =
    buildSelector((state: StoreSchema) => state?.articlesPageList?.sort)
export const [useGetArticlesFiltersOrder, getArticlesFiltersOrder] =
    buildSelector((state: StoreSchema) => state?.articlesPageList?.order)
export const [useGetArticlesFiltersSearch, getArticlesFiltersSearch] =
    buildSelector((state: StoreSchema) => state?.articlesPageList?.search)
export const [useGetArticlesFiltersType, getArticlesFiltersType] =
    buildSelector((state: StoreSchema) => state?.articlesPageList?.type)
export const [useGetArticlesFiltersPage, getArticlesFiltersPage] =
    buildSelector((state: StoreSchema) => state?.articlesPageList?.page ?? 1)
