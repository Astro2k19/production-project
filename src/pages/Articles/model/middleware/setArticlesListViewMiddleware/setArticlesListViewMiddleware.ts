import { createListenerMiddleware } from '@reduxjs/toolkit'
import { articlesPageActions } from '../../slice/articlesPageListSlice/articlesPageListSlice'
import { ARTICLES_LIST_VIEW_KEY } from '@/shared/const/localStorage'
import { type StoreSchema } from '@/app/providers/storeProvider'

export const setArticlesListViewMiddleware = createListenerMiddleware()
setArticlesListViewMiddleware.startListening({
  actionCreator: articlesPageActions.setArticlesView,
  effect: (action, { getState }) => {
    localStorage.setItem(
      ARTICLES_LIST_VIEW_KEY,
      JSON.stringify((getState() as StoreSchema).articlesPageList?.view)
    )
  }
})
