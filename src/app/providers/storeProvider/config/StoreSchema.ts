// eslint-disable-next-line authoring-project-plugin/public-api-import-checker
import { type EnhancedStore, type AnyAction, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type CombinedState, type Dispatch } from 'redux'

import { type ArticleDetailsSchema } from '@/entities/Article'
import { type UserSchema } from '@/entities/User'
import { type AddCommentFormSchema } from '@/features/AddCommentForm'
import { type ArticlesFiltersSchema } from '@/features/ArticlesFilters'
import { type LoginFormSchema } from '@/features/Auth'
import { type ProfileSchema } from '@/features/EditableProfileCard'
import { type SavePageScrollSchema } from '@/features/SavePageScroll'
import { type ArticleSingleCommentsSchema } from '@/pages/ArticleSingle'
import { type ArticlesPageListSchema } from '@/pages/Articles'
import { type rtkApi } from '@/shared/api/rtkApi'

export interface StoreSchema {
  user: UserSchema
  savePageScroll: SavePageScrollSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  loginForm?: LoginFormSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleSingleComments?: ArticleSingleCommentsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPageList?: ArticlesPageListSchema
  articlesFilters: ArticlesFiltersSchema
}

export type StoreSchemaKeys = keyof StoreSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>
  add: (key: StoreSchemaKeys, reducer: Reducer) => void
  remove: (key: StoreSchemaKeys) => void
}

export interface ExtendedReducerManagerStore extends EnhancedStore<StoreSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance
}

export interface AsyncThunkConfig<T = undefined> {
  extra: ThunkExtraArgs
  rejectValue?: T
  dispatch?: Dispatch
  state: StoreSchema
}
