import { type StoreSchema } from '@/app/providers/storeProvider'

import {
	getAddCommentFormError,
	getAddCommentFormIsLoading,
	getAddCommentFormText,
} from './addCommentFormSelectors'

describe('getAddCommentFormText', () => {
	test('should return Text', () => {
		const state: DeepPartial<StoreSchema> = {
			addCommentForm: {
				text: 'hello world!',
			},
		}
		expect(getAddCommentFormText(state as StoreSchema)).toBe('hello world!')
	})

	test('should return undefined', () => {
		const state: DeepPartial<StoreSchema> = {}
		expect(getAddCommentFormText(state as StoreSchema)).toBeUndefined()
	})
})

describe('getAddCommentFormIsLoading', () => {
	test('should return loading status', () => {
		const state: DeepPartial<StoreSchema> = {
			addCommentForm: {
				isLoading: true,
			},
		}
		expect(getAddCommentFormIsLoading(state as StoreSchema)).toBe(true)
	})

	test('should return undefined', () => {
		const state: DeepPartial<StoreSchema> = {}
		expect(getAddCommentFormIsLoading(state as StoreSchema)).toBeUndefined()
	})
})

describe('getAddCommentFormError', () => {
	test('should return Text', () => {
		const state: DeepPartial<StoreSchema> = {
			addCommentForm: {
				error: 'error Text',
			},
		}
		expect(getAddCommentFormError(state as StoreSchema)).toBe('error Text')
	})

	test('should return undefined', () => {
		const state: DeepPartial<StoreSchema> = {}
		expect(getAddCommentFormError(state as StoreSchema)).toBeUndefined()
	})
})
