import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type Store } from 'redux'
import { counterReducer } from 'entities/Counter'
import { authMiddleware, userReducer } from 'entities/User'
import { authReducer } from 'features/auth/by-username'
import { createReducerManager } from 'app/providers/storeProvider/config/createReducerManager'

export const createReduxStore = (initialState?: StoreSchema): Store => {
  const initialReducers: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(initialReducers)

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(authMiddleware.middleware)
  })

  store.reducerManager = reducerManager

  return store
}
