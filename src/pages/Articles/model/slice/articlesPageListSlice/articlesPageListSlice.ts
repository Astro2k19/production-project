import { type PayloadAction, createEntityAdapter } from '@reduxjs/toolkit'

import { type StoreSchema } from '@/app/providers/storeProvider'

import { type Article, ArticleType, ArticlesListView } from '@/entities/Article'

import { type ApiError } from '@/shared/api/api'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { SortOrder } from '@/shared/types/sortOrder'

import { ArticlesSortFields } from '../../const/articleFiltersConst'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'
import { type InitialArticlesListState } from '../../services/setInitialArticlesListState/setInitialArticlesListState'
import { type ArticlesPageListSchema } from '../../types/articlesPageListSchema'

export const articlesListAdapter = createEntityAdapter<Article>({
    selectId: article => article.id,
})

export const articlesPageListSlice = buildSlice({
    name: 'articlesPageList',
    initialState: articlesListAdapter.getInitialState<ArticlesPageListSchema>({
        isLoading: false,
        entities: {},
        ids: [],
        view: ArticlesListView.LIST,
        limit: 4,
        hasMore: true,
        _inited: false,
        sort: 'views',
        order: 'asc',
        search: '',
        type: ArticleType.ALL,
        page: 1,
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticlesSortFields>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
        setArticlesView: (state, action: PayloadAction<ArticlesListView>) => {
            state.view = action.payload
            state.limit = action.payload === ArticlesListView.GRID ? 9 : 4
        },
        setInitial: (
            state,
            action: PayloadAction<InitialArticlesListState>,
        ) => {
            state.view = action.payload.initialView
            state.limit = action.payload.initialLimit
            state._inited = true
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined

                if (action.meta.arg?.replace) {
                    articlesListAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasMore = state.limit <= action.payload.length

                if (action.meta.arg?.replace) {
                    articlesListAdapter.setAll(state, action.payload)
                } else {
                    articlesListAdapter.addMany(state, action.payload)
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as ApiError
            })
    },
})

export const {
    actions: articlesPageActions,
    useActions: useArticlesPageActions,
} = articlesPageListSlice
export const { reducer: articlesPageReducer } = articlesPageListSlice
export const articlesListSelectors =
    articlesListAdapter.getSelectors<StoreSchema>(
        state =>
            state.articlesPageList ?? articlesPageListSlice.getInitialState(),
    )
