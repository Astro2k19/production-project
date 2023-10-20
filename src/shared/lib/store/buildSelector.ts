import { useSelector } from 'react-redux'

import { StoreSchema } from '@/app/providers/storeProvider'

type Selector<T> = (state: StoreSchema) => T
type Result<T> = [() => T, Selector<T>]
export const buildSelector = <T>(selector: Selector<T>): Result<T> => {
	const useSelectorWrapper = () => {
		return useSelector(selector)
	}

	return [useSelectorWrapper, selector]
}
