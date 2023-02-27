import { counterReducer, counterActions } from './counterSlice'
import { type CounterSchema } from '../types/CounterSchema'

describe('counterSlice', () => {
  test('increment', () => {
    const counterState: CounterSchema = { value: 10 }

    expect(counterReducer(counterState, counterActions.increment())).toEqual({ value: 11 })
  })

  test('decrement', () => {
    const counterState: CounterSchema = { value: 100 }

    expect(counterReducer(counterState, counterActions.decrement())).toEqual({ value: 99 })
  })

  test('with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 })
  })
})
