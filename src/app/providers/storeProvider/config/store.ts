import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type Store } from 'redux'
import { counterReducer } from 'entities/Counter'
import { authMiddleware, userReducer } from 'entities/User'
import { authReducer } from 'features/auth/by-username'

export const createReduxStore = (initialState?: StoreSchema): Store => {
  const storeReducer: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: authReducer
  }

  return configureStore<StoreSchema>({
    reducer: storeReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(authMiddleware.middleware)
  })
}
