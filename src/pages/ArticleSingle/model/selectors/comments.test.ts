import { type StoreSchema } from 'app/providers/storeProvider'
import { getArticleSingleCommentsError, getArticleSingleCommentsIsLoading } from './comments'

const state: DeepPartial<StoreSchema> = {
  articleSingleComments: {
    isLoading: true,
    error: 'Ops! something went wrong.'
  }
}
describe('getArticleSingleCommentsIsLoading', () => {
  test('should return loading status', () => {
    expect(getArticleSingleCommentsIsLoading(state as StoreSchema)).toBe(true)
  })

  test('should return undefined', () => {
    expect(getArticleSingleCommentsIsLoading({} as StoreSchema)).toBeUndefined()
  })
})

describe('getArticleSingleCommentsError', () => {
  test('should return error', () => {
    expect(getArticleSingleCommentsError(state as StoreSchema)).toBe('Ops! something went wrong.')
  })

  test('should return undefined', () => {
    expect(getArticleSingleCommentsError({} as StoreSchema)).toBeUndefined()
  })
})
