import { type StoreSchema } from 'app/providers/storeProvider'
import {
  articleSingleRecommendationsSlice,
  recommendationsAdapter
} from '../slice/articleSingleRecommendationsSlice'

export const getArticleSingleRecommendationsIsLoading = (state: StoreSchema) => state.articleSinglePage?.recommendations?.isLoading
export const getArticleSingleRecommendationsError = (state: StoreSchema) => state.articleSinglePage?.recommendations?.error

export const articleSingleRecommendationsSelectors = recommendationsAdapter.getSelectors<StoreSchema>(state => {
  return state.articleSinglePage?.recommendations ?? articleSingleRecommendationsSlice.getInitialState()
})
