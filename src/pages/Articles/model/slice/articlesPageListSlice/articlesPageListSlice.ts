import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Article, ArticlesListView } from 'entities/Article'
import { type ArticlesPageListSchema } from '../../types/articlesPageListSchema'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'
import { type StoreSchema } from 'app/providers/storeProvider'
import { type InitialArticlesListState } from '../../services/setInitialArticlesListState/setInitialArticlesListState'
import { type ApiError } from 'shared/api/api'

export const articlesListAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const articlesPageListSlice = createSlice({
  name: 'articlesPageList',
  initialState: articlesListAdapter.getInitialState<ArticlesPageListSchema>({
    isLoading: false,
    entities: {},
    ids: [],
    view: ArticlesListView.LIST,
    limit: 4,
    hasMore: true,
    _inited: false
  }),
  reducers: {
    setArticlesView: (state, action: PayloadAction<ArticlesListView>) => {
      state.view = action.payload
      state.limit = action.payload === ArticlesListView.GRID ? 9 : 4
    },
    setInitial: (state, action: PayloadAction<InitialArticlesListState>) => {
      state.view = action.payload.initialView
      state.limit = action.payload.initialLimit
      state._inited = true
    }
  },
  extraReducers: (builder) => {
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
          console.log(action.payload, 'action.payload')
          articlesListAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as ApiError
      })
  }
})

export const { actions: articlesPageActions } = articlesPageListSlice
export const { reducer: articlesPageReducer } = articlesPageListSlice
export const articlesListSelectors = articlesListAdapter.getSelectors<StoreSchema>(
  state => state.articlesPageList ?? articlesPageListSlice.getInitialState()
)
