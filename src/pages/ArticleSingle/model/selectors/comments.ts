import { type StoreSchema } from 'app/providers/storeProvider'
import { articleSingleCommentsSlice, commentsAdapter } from '../slice/articleSingleCommentsSlice'

export const getArticleSingleCommentsIsLoading = (state: StoreSchema) => state.articleSinglePageComments?.isLoading
export const getArticleSingleCommentsError = (state: StoreSchema) => state.articleSinglePageComments?.error

export const articleSingleCommentsSelectors = commentsAdapter.getSelectors<StoreSchema>(state => {
  return state.articleSinglePageComments ?? articleSingleCommentsSlice.getInitialState()
})
