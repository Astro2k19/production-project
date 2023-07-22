import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails'
import { article as data } from '../../mocks/data'
import { ArticleError } from '../conts/articleConts'

describe('getArticleDetailsData', () => {
  test('should return data', () => {
    const state: DeepPartial<StoreSchema> = {
      articleDetails: {
        data
      }
    }

    expect(getArticleDetailsData(state as StoreSchema)).toEqual(data)
  })

  test('should return undefined', () => {
    const state: DeepPartial<StoreSchema> = {}

    expect(getArticleDetailsData(state as StoreSchema)).toBeUndefined()
  })
})

describe('getArticleDetailsIsLoading', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StoreSchema> = {
      articleDetails: {
        isLoading: true
      }
    }

    expect(getArticleDetailsIsLoading(state as StoreSchema)).toBe(true)
  })

  test('should return undefined isLoading', () => {
    const state: DeepPartial<StoreSchema> = {}

    expect(getArticleDetailsIsLoading(state as StoreSchema)).toBeUndefined()
  })
})

describe('getArticleDetailsError', () => {
  test('should return error', () => {
    const state: DeepPartial<StoreSchema> = {
      articleDetails: {
        error: {
          code: '404',
          message: ArticleError.SERVER_ERROR
        }
      }
    }

    expect(getArticleDetailsError(state as StoreSchema)).toEqual({
      code: '404',
      message: ArticleError.SERVER_ERROR
    })
  })

  test('should return undefined error', () => {
    const state: DeepPartial<StoreSchema> = {}

    expect(getArticleDetailsError(state as StoreSchema)).toBeUndefined()
  })
})
