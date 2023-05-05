import { type StoreSchema } from 'app/providers/storeProvider'
import { articleSingleCommentsSlice, commentsAdapter } from '../slice/articleSingleCommentsSlice'

export const getArticleSingleCommentsIsLoading = (state: StoreSchema) => state.articleSinglePage?.comments.isLoading
export const getArticleSingleCommentsError = (state: StoreSchema) => state.articleSinglePage?.comments.error

export const articleSingleCommentsSelectors = commentsAdapter.getSelectors<StoreSchema>(state => {
  return state.articleSinglePage?.comments ?? articleSingleCommentsSlice.getInitialState()
})
