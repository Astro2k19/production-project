import { type StoreSchema } from '@/app/providers/storeProvider'
import {buildSelector} from "@/shared/lib/store/buildSelector";

export const [useGetArticlesFiltersSort, getArticlesFiltersSort] = buildSelector((state: StoreSchema) => state.articlesFilters.sort)
export const [useGetArticlesFiltersOrder, getArticlesFiltersOrder] = buildSelector((state: StoreSchema) => state.articlesFilters.order)
export const [useGetArticlesFiltersSearch, getArticlesFiltersSearch] = buildSelector((state: StoreSchema) => state.articlesFilters.search)
export const [useGetArticlesFiltersType, getArticlesFiltersType] = buildSelector((state: StoreSchema) => state.articlesFilters.type)
export const [useGetArticlesFiltersPage, getArticlesFiltersPage] = buildSelector((state: StoreSchema) => state.articlesFilters?.page ?? 1)
