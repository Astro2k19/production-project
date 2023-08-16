import { type StoreSchema } from '@/app/providers/storeProvider'
import { articleSingleCommentsSlice, commentsAdapter } from '../slice/articleSingleCommentsSlice'

export const getArticleSingleCommentsIsLoading = (state: StoreSchema) => state.articleSingleComments?.isLoading
export const getArticleSingleCommentsError = (state: StoreSchema) => state.articleSingleComments?.error

export const articleSingleCommentsSelectors = commentsAdapter.getSelectors<StoreSchema>(state => {
  return state.articleSingleComments ?? articleSingleCommentsSlice.getInitialState()
})
