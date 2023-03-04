import { configureStore, type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type Store } from 'redux'
import { counterReducer } from 'entities/Counter'
import { authMiddleware, userReducer } from 'entities/User'
import { createReducerManager } from 'app/providers/storeProvider/config/createReducerManager'

export const createReduxStore = (
  initialState?: StoreSchema, asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
): Store => {
  const initialReducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(initialReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(authMiddleware.middleware)
  })

  // @ts-expect-error: we added reducer manager
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
