import { type StoreSchema } from 'app/providers/storeProvider'

export const getArticlesFiltersSort = (state: StoreSchema) => state.articlesFilters.sort
export const getArticlesFiltersOrder = (state: StoreSchema) => state.articlesFilters.order
export const getArticlesFiltersSearch = (state: StoreSchema) => state.articlesFilters.search
export const getArticlesFiltersType = (state: StoreSchema) => state.articlesFilters.type
