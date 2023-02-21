import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreShema } from 'app/providers/storeProvider/config/StoreShema'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  const state: DeepPartial<StoreShema> = {
    counter: {
      value: 55
    }
  }

  test('should return counter value', () => {
    expect(getCounterValue(state as StoreShema)).toBe(55)
  })
})
