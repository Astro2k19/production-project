import { createAsyncThunk } from '@reduxjs/toolkit'

import { type AsyncThunkConfig } from '@/app/providers/storeProvider'

import {
    type ArticlesSortFields,
    articlesFiltersActions,
} from '@/features/ArticlesFilters'

import { type ArticleType, ArticlesListView } from '@/entities/Article'

import { ARTICLES_LIST_VIEW_KEY } from '@/shared/const/localStorage'
import { getUrlQueryParams } from '@/shared/lib'
import { type SortOrder } from '@/shared/types/sortOrder'

import { getArticlesInited } from '../../selectors/articlesPageList'
import { articlesPageActions } from '../../slice/articlesPageListSlice/articlesPageListSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export interface InitialArticlesListState {
    initialView: ArticlesListView
    initialLimit: number
}

export const setInitialArticlesListState = createAsyncThunk<
    undefined,
    undefined,
    AsyncThunkConfig
>('articlesPageList/setInitialArticlesListState', async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI

    const inited = getArticlesInited(getState())

    if (!inited) {
        const initialView =
            JSON.parse(
                localStorage.getItem(
                    ARTICLES_LIST_VIEW_KEY,
                ) as ArticlesListView,
            ) || ArticlesListView.LIST
        const initialLimit = initialView === ArticlesListView.GRID ? 9 : 4
        const urlQueryParams = getUrlQueryParams(false) as URLSearchParams
        const { setType, setSort, setOrder, setSearch } = articlesFiltersActions

        urlQueryParams.forEach((value, key) => {
            switch (key) {
                case 'sort':
                    dispatch(setSort(value as ArticlesSortFields))
                    break
                case 'order':
                    dispatch(setOrder(value as SortOrder))
                    break
                case 'search':
                    dispatch(setSearch(value))
                    break
                case 'type':
                    dispatch(setType(value as ArticleType))
                    break
            }
        })

        dispatch(articlesPageActions.setInitial({ initialView, initialLimit }))
        dispatch(fetchArticlesList({}))
    }

    return undefined
})
