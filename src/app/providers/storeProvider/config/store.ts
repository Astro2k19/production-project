import {
    type CombinedState,
    type Reducer,
    type ReducersMapObject,
    configureStore,
} from '@reduxjs/toolkit'

import { setArticlesListViewMiddleware } from '@/pages/Articles'

import { savePageScrollReducer } from '@/features/SavePageScroll'

import { authMiddleware, userReducer } from '@/entities/User'

import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'

import { type StoreSchema, type ThunkExtraArgs } from './StoreSchema'
import { createReducerManager } from './createReducerManager'

export const createReduxStore = (
    initialState?: StoreSchema,
    asyncReducers?: ReducersMapObject<StoreSchema>,
) => {
    const initialReducers: ReducersMapObject<StoreSchema> = {
        ...asyncReducers,
        user: userReducer,
        savePageScroll: savePageScrollReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }

    const reducerManager = createReducerManager(initialReducers)

    const extraArgs: ThunkExtraArgs = {
        api: $api,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArgs,
                },
            })
                .prepend(
                    authMiddleware.middleware,
                    setArticlesListViewMiddleware.middleware,
                )
                .concat(rtkApi.middleware),
    })

    // @ts-expect-error eslint-disable-line
    store.reducerManager = reducerManager //eslint-disable-line

    return store
}

export type ReduxStore = ReturnType<typeof createReduxStore>
export type AppDispatch = ReduxStore['dispatch']
export type RootState = ReturnType<ReduxStore['getState']>
