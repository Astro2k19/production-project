import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { type FC } from 'react'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

export const Counter: FC = () => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)
  const { t } = useTranslation()

  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
      <div>
          <h1 data-testid='counter-output'>{t('value')} {value}</h1>
          <Button onClick={increment} data-testid='btn-increment'>{t('increment')}</Button>
          <Button onClick={decrement} data-testid='btn-decrement'>{t('decrement')}</Button>
      </div>
  )
}
