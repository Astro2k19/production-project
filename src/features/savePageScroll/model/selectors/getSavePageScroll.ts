import { type StoreSchema } from '@/app/providers/storeProvider'
import { createSelector } from '@reduxjs/toolkit'

const getSavePageScroll = (state: StoreSchema) => state.savePageScroll.scroll
export const getSavePageScrollByKey = createSelector(
  getSavePageScroll,
  (scroll: StoreSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
)
