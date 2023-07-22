import { type StoreSchema } from 'app/providers/storeProvider'
import { getArticleSingleCommentsError, getArticleSingleCommentsIsLoading } from './comments'
import { ArticleSingleCommentsError } from '../const/articleSingleConst'

const state: DeepPartial<StoreSchema> = {
  articleSingleComments: {
    isLoading: true,
    error: {
      code: '500',
      message: ArticleSingleCommentsError.SERVER_ERROR
    }
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
    expect(getArticleSingleCommentsError(state as StoreSchema)).toEqual({
      code: '500',
      message: ArticleSingleCommentsError.SERVER_ERROR
    })
  })

  test('should return undefined', () => {
    expect(getArticleSingleCommentsError({} as StoreSchema)).toBeUndefined()
  })
})
