import { type UserSchema } from '@/entities/User'
// eslint-disable-next-line authoring-project-plugin/public-api-import-checker
import { type LoginFormSchema } from '@/features/auth/by-username'
import { type EnhancedStore, type AnyAction, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type CombinedState, type Dispatch } from 'redux'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from '@/entities/Article'
import { type AddCommentFormSchema } from '@/features/addCommentForm'
import { type SavePageScrollSchema } from '@/features/savePageScroll'
import { type rtkApi } from '@/shared/api/rtkApi'
import { type ProfileSchema } from '@/features/editableProfileCard'
import { type ArticleSingleCommentsSchema } from '@/pages/ArticleSingle'
import { type ArticlesPageListSchema } from '@/pages/Articles'
import { type ArticlesFiltersSchema } from '@/features/articlesFilters'

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
