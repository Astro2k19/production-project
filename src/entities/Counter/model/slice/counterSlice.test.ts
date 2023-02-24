import { counterReducer, counterActions } from './counterSlice'
import { type CounterShema } from '../types/CounterShema'

describe('counterSlice', () => {
  test('increment', () => {
    const counterState: CounterShema = { value: 10 }

    expect(counterReducer(counterState, counterActions.increment())).toEqual({ value: 11 })
  })

  test('decrement', () => {
    const counterState: CounterShema = { value: 100 }

    expect(counterReducer(counterState, counterActions.decrement())).toEqual({ value: 99 })
  })

  test('with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 })
  })
})
