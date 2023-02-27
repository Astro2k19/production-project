import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  const state: DeepPartial<StoreSchema> = {
    counter: {
      value: 55
    }
  }

  test('should return counter value', () => {
    expect(getCounterValue(state as StoreSchema)).toBe(55)
  })
})
