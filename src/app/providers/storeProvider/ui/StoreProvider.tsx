import { Provider } from 'react-redux'
import { type FC, type ReactNode } from 'react'
import { createReduxStore } from '../config/store'
import { type StoreSchema } from '../config/StoreSchema'

interface StoreProviderProps {
  children: ReactNode
  initialState?: StoreSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState)

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}
