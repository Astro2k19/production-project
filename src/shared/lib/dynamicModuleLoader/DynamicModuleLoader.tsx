import { type FC, type ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { type ExtendedReducerManagerStore, type StoreSchemaKeys } from 'app/providers/storeProvider/config/StoreSchema'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StoreSchemaKeys]?: Reducer
}

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
    console.log('useEffect in DynamicModuleLoader')

    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StoreSchemaKeys, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StoreSchemaKeys)
          dispatch({ type: `@REMOVE ${name} reducer` })
        })
      }
    }
  }, []) // eslint-disable-line

  return (
      <>
          { children }
      </>
  )
}
