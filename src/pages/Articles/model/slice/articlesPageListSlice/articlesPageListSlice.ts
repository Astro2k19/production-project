import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Article, ArticlesListView } from 'entities/Article'
import { type ArticlesPageListSchema } from '../../types/articlesPageListSchema'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'
import { type StoreSchema } from 'app/providers/storeProvider'
import { ARTICLES_LIST_VIEW_KEY } from 'shared/const/localStorage'

export const articlesListAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const articlesPageListSlice = createSlice({
  name: 'articlesPageList',
  initialState: articlesListAdapter.getInitialState<ArticlesPageListSchema>({
    isLoading: false,
    entities: {},
    ids: [],
    view: ArticlesListView.GRID,
    page: 1,
    hasMore: true
  }),
  reducers: {
    setArticlesView: (state, action: PayloadAction<ArticlesListView>) => {
      state.view = action.payload
      state.limit = action.payload === ArticlesListView.GRID ? 9 : 4
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setInitial: (state) => {
      const initialView = JSON.parse(localStorage.getItem(
        ARTICLES_LIST_VIEW_KEY) as ArticlesListView
      ) || ArticlesListView.GRID
      const initialLimit = initialView === ArticlesListView.GRID ? 9 : 4

      state.view = initialView
      state.limit = initialLimit
    }
  },
  extraReducers: (builder) => {
    builder
      // .addCase(setInitialArticlesListState.fulfilled, (state, action) => {
      //   console.log(action.payload.initialView, 'action.payload.initialView')
      //   console.log(action.payload.initialLimit, 'action.payload.initialLimit')
      //
      //   state.view = action.payload.initialView
      //   state.limit = action.payload.initialLimit
      // })
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesListAdapter.addMany(state, action.payload)
        state.hasMore = action.payload.length > 0
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: articlesPageActions } = articlesPageListSlice
export const { reducer: articlesPageReducer } = articlesPageListSlice
export const articlesListSelectors = articlesListAdapter.getSelectors<StoreSchema>(
  state => state.articlesPageList ?? articlesPageListSlice.getInitialState()
)
