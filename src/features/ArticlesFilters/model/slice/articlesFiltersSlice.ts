import { type PayloadAction } from '@reduxjs/toolkit'

import { ArticlesSortFields } from '../const/articleFiltersConst'
import { type ArticlesFiltersSchema } from '../types/articleFilters'

import { ArticleType } from '@/entities/Article'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { type SortOrder } from '@/shared/types/sortOrder'

const initialState: ArticlesFiltersSchema = {
  sort: ArticlesSortFields.VIEWS,
  order: 'asc',
  search: '',
  type: ArticleType.ALL,
  page: 1
}

export const articlesFiltersSlice = buildSlice({
  name: 'articlesFiltersSlice',
  initialState,
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
    }
  }
})

export const { useActions: useArticlesFiltersActions, actions: articlesFiltersActions } = articlesFiltersSlice
export const { reducer: articlesFiltersReducer } = articlesFiltersSlice