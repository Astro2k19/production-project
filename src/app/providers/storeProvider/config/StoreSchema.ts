import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginFormSchema } from 'features/auth/by-username'
import { type EnhancedStore, type AnyAction, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type CombinedState, type Dispatch } from 'redux'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type ArticleSingleCommentsSchema } from 'pages/ArticleSingle'
import { type AddCommentFormSchema } from 'features/addCommentForm'
import { type ArticlesPageListSchema } from 'pages/Articles'
import { type SavePageScrollSchema } from 'features/savePageScroll'

export interface StoreSchema {
  counter: CounterSchema
  user: UserSchema
  savePageScroll: SavePageScrollSchema

  // async reducers
  loginForm?: LoginFormSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleSingleComments?: ArticleSingleCommentsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPageList?: ArticlesPageListSchema
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
