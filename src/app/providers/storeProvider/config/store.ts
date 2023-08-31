import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoreSchema, type ThunkExtraArgs } from './StoreSchema'
import { authMiddleware, initUserDataMiddleware, userReducer } from '@/entities/User'
import { createReducerManager } from './createReducerManager'
import { $api } from '@/shared/api/api'
import { savePageScrollReducer } from '@/features/savePageScroll'
import { articlesFiltersReducer } from '@/features/articlesFilters'
import { rtkApi } from '@/shared/api/rtkApi'
import { setArticlesListViewMiddleware } from '@/pages/Articles'

export const createReduxStore = (
  initialState?: StoreSchema, asyncReducers?: ReducersMapObject<StoreSchema>
) => {
  const initialReducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    user: userReducer,
    savePageScroll: savePageScrollReducer,
    articlesFilters: articlesFiltersReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
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
    ).concat(
      rtkApi.middleware
    )
  })

  // @ts-expect-error eslint-disable-line
  store.reducerManager = reducerManager //eslint-disable-line

  return store
}

export type ReduxStore = ReturnType<typeof createReduxStore>
export type AppDispatch = ReduxStore['dispatch']
export type RootState = ReturnType<ReduxStore['getState']>
