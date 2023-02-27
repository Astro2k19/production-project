import { getCounter } from './getCounter'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

describe('getCounter', () => {
  const state: DeepPartial<StoreSchema> = {
    counter: {
      value: 15
    }
  }

  test('should return counter object', () => {
    expect(getCounter(state as StoreSchema)).toEqual({
      value: 15
    })
  })
})
