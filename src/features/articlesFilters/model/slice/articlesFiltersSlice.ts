import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticlesFiltersSchema, ArticlesSortFields } from '../types/articleFilters'
import { type SortOrder } from 'shared/types/sortOrder'
import { ArticleType } from 'entities/Article'

const initialState: ArticlesFiltersSchema = {
  sort: ArticlesSortFields.VIEWS,
  order: 'asc',
  search: '',
  type: ArticleType.ALL
}

export const articlesFiltersSlice = createSlice({
  name: 'articlesFiltersSlice',
  initialState,
  reducers: {
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

export const { actions: articlesFiltersActions } = articlesFiltersSlice
export const { reducer: articlesFiltersReducer } = articlesFiltersSlice
