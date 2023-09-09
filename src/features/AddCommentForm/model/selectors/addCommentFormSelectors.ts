import { type StoreSchema } from '@/app/providers/storeProvider'

export const getAddCommentFormText = (state: StoreSchema) => state.addCommentForm?.text
export const getAddCommentFormIsLoading = (state: StoreSchema) => state.addCommentForm?.isLoading
export const getAddCommentFormError = (state: StoreSchema) => state.addCommentForm?.error
