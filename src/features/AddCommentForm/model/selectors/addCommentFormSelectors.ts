import { type StoreSchema } from '@/app/providers/storeProvider'

import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useGetAddCommentFormText, getAddCommentFormText] = buildSelector(
	(state: StoreSchema) => state.addCommentForm?.text,
)
export const getAddCommentFormIsLoading = (state: StoreSchema) =>
	state.addCommentForm?.isLoading
export const getAddCommentFormError = (state: StoreSchema) =>
	state.addCommentForm?.error
