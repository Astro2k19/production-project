import { getCounter } from './getCounter'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreShema } from 'app/providers/storeProvider/config/StoreShema'

describe('getCounter', () => {
  const state: DeepPartial<StoreShema> = {
    counter: {
      value: 15
    }
  }

  test('should return counter object', () => {
    expect(getCounter(state as StoreShema)).toEqual({
      value: 15
    })
  })
})
