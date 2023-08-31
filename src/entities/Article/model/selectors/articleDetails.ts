import { type StoreSchema } from '@/app/providers/storeProvider'

export const getArticleDetailsData = (state: StoreSchema) => state.articleDetails?.data
export const getArticleDetailsIsLoading = (state: StoreSchema) => state.articleDetails?.isLoading
export const getArticleDetailsError = (state: StoreSchema) => state.articleDetails?.error
