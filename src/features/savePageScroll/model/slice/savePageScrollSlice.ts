import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type SavePageScrollSchema } from '../types/savePageScroll'

const initialState: SavePageScrollSchema = {
  scroll: {}
}

export const savePageScrollSlice = createSlice({
  name: 'savePageScroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ page: string, scroll: number }>) => {
      state.scroll[payload.page] = payload.scroll
    }
  }
})

export const { actions: savePageScrollActions } = savePageScrollSlice
export const { reducer: savePageScrollReducer } = savePageScrollSlice
