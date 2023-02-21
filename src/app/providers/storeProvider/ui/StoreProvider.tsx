import { Provider } from 'react-redux'
import { type FC, type ReactNode } from 'react'
import { createReduxStore } from '../config/store'
import { type StoreShema } from '../config/StoreShema'

interface StoreProviderProps {
  children: ReactNode
  initialState?: StoreShema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState)

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}
