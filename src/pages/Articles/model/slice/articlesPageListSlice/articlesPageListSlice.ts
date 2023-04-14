import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Article, ArticlesListView } from 'entities/Article'
import { type ArticlesPageListSchema } from '../../types/articlesPageListSchema'
import { ARTICLES_LIST_VIEW_KEY } from 'shared/const/localStorage'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'

export const articlesListAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

const initialView = JSON.parse(localStorage.getItem(
  ARTICLES_LIST_VIEW_KEY) as ArticlesListView
) || ArticlesListView.GRID

console.log(initialView, 'initialView')

export const articlesPageListSlice = createSlice({
  name: 'articlesPageList',
  initialState: articlesListAdapter.getInitialState<ArticlesPageListSchema>({
    isLoading: false,
    entities: {},
    ids: [],
    view: initialView
  }),
  reducers: {
    setArticlesView: (state, action: PayloadAction<ArticlesListView>) => {
      console.log('action', action.payload)
      state.view = action.payload
    },
    initArticlesListView: () => {

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesListAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: articlesPageActions } = articlesPageListSlice
export const { reducer: articlesPageReducer } = articlesPageListSlice
