import { Provider } from 'react-redux'
import { type FC, type ReactNode } from 'react'
import { createReduxStore } from '../config/store'
import { type StoreSchema } from '../config/StoreSchema'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children: ReactNode
  initialState?: StoreSchema
  asyncReducers: DeepPartial<ReducersMapObject<StoreSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore(initialState, asyncReducers)

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}
