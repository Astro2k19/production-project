import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoreSchema, type ThunkExtraArgs } from 'app/providers/storeProvider/config/StoreSchema'
import { counterReducer } from 'entities/Counter'
import { authMiddleware, initUserDataMiddleware, userReducer } from 'entities/User'
import { createReducerManager } from 'app/providers/storeProvider/config/createReducerManager'
import { $api } from 'shared/api/api'
import {
  setArticlesListViewMiddleware
} from 'pages/Articles/model/middlewares/setArticlesListViewMiddleware/setArticlesListViewMiddleware'
import { initArticlesListViewMiddleware } from 'pages/Articles/model/middlewares/init/init'

export const createReduxStore = (
  initialState?: StoreSchema, asyncReducers?: ReducersMapObject<StoreSchema>
) => {
  const initialReducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(initialReducers)

  const extraArgs: ThunkExtraArgs = {
    api: $api
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArgs
      }
    }).prepend(
      authMiddleware.middleware,
      initUserDataMiddleware.middleware,
      setArticlesListViewMiddleware.middleware
    )
  })

  // @ts-expect-error eslint-disable-line
  store.reducerManager = reducerManager //eslint-disable-line

  return store
}

export type ReduxStore = ReturnType<typeof createReduxStore>
export type AppDispatch = ReduxStore['dispatch']
export type RootState = ReturnType<ReduxStore['getState']>
