import { createListenerMiddleware } from '@reduxjs/toolkit'

import { type StoreSchema } from '@/app/providers/storeProvider'

import { ARTICLES_LIST_VIEW_KEY } from '@/shared/const/localStorage'

import { articlesPageActions } from '../../slice/articlesPageListSlice/articlesPageListSlice'

export const setArticlesListViewMiddleware = createListenerMiddleware()
setArticlesListViewMiddleware.startListening({
	actionCreator: articlesPageActions.setArticlesView,
	effect: (action, { getState }) => {
		localStorage.setItem(
			ARTICLES_LIST_VIEW_KEY,
			JSON.stringify((getState() as StoreSchema).articlesPageList?.view),
		)
	},
})
