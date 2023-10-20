import { type Reducer } from '@reduxjs/toolkit'
import { type FC, type ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'

import {
	type ExtendedReducerManagerStore,
	type StoreSchema,
	type StoreSchemaKeys,
} from '../../../app/providers/storeProvider/config/StoreSchema'

export type ReducersList = {
	[name in StoreSchemaKeys]?: Reducer<NonNullable<StoreSchema[name]>>
}

interface DynamicModuleLoaderProps {
	children: ReactNode
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
	const { removeAfterUnmount = true, reducers, children } = props

	const store = useStore() as ExtendedReducerManagerStore

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			store.reducerManager.add(name as StoreSchemaKeys, reducer)
			// dispatch({ type: `@INIT ${name} reducer` })
			console.log(`ADD REDUCER ${name}`)
		})

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StoreSchemaKeys)
					// dispatch({ type: `@REMOVE ${name} reducer` })
					console.log(`REMOVE REDUCER ${name}`)
				})
			}
		}
	}, []) // eslint-disable-line

	return <>{children}</>
}
