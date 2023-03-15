import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginFormSchema } from 'features/auth/by-username'
import { type EnhancedStore, type AnyAction, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type CombinedState, type Dispatch } from 'redux'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'

export interface StoreSchema {
  counter: CounterSchema
  user: UserSchema
  loginForm?: LoginFormSchema
  profile?: ProfileSchema
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

export interface AsyncThunkConfig<T> {
  extra: ThunkExtraArgs
  rejectValue: T
  dispatch?: Dispatch
  state: StoreSchema
}
