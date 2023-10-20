import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'

import { injectStore } from '@/shared/api/api'

import { type StoreSchema } from '../config/StoreSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
	children: ReactNode
	initialState?: StoreSchema
	asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = ({
	children,
	initialState,
	asyncReducers,
}) => {
	const store = createReduxStore(
		initialState,
		asyncReducers as ReducersMapObject<StoreSchema>,
	)

	injectStore(store)

	return <Provider store={store}>{children}</Provider>
}
