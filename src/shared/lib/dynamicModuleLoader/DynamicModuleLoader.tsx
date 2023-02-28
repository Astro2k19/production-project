import { type FC, type ReactNode, useEffect } from 'react'
import { authReducer } from 'features/auth/by-username'
import { useDispatch, useStore } from 'react-redux'
import { type ExtendedReducerManagerStore, type StoreSchemaKeys } from 'app/providers/storeProvider/config/StoreSchema'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StoreSchemaKeys]?: Reducer
}

type ReducerListEntry = [StoreSchemaKeys, Reducer]

interface DynamicModuleLoaderProps {
  children: ReactNode
  reducers: ReducersList
  removeAfterUnmount: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    removeAfterUnmount,
    reducers,
    children
  } = props

  const store = useStore() as ExtendedReducerManagerStore
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@REMOVE ${name} reducer` })
        })
      }
    }
  }, [])

  return (
      <>
          { children }
      </>
  )
}
