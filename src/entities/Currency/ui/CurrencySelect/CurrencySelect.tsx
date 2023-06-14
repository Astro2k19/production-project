import { type FC } from 'react'
import { Select } from 'shared/ui/select/Select'
import { Currency } from '../../model/types/currency'
import { ListBox } from 'shared/ui/listBox/ListBox'

const currencyOptions = [
  {
    value: Currency.EUR,
    label: Currency.EUR
  },
  {
    value: Currency.USD,
    label: Currency.USD
  },
  {
    value: Currency.UAH,
    label: Currency.UAH
  },
  {
    value: Currency.ZL,
    label: Currency.ZL
  }
]

interface CurrencySelectProps {
  className?: string
  onChange: (value: Currency) => void
  value?: Currency
  readonly?: boolean
}

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
  const { className, onChange, readonly, value } = props
  const onChangeHandler = (value: string) => {
    onChange(value as Currency)
  }

  return (
      <ListBox
          label={'Currency'}
          items={currencyOptions}
          value={value}
          onChange={onChangeHandler}
      />
  )
}

// <Select
//     label={'Currency'}
//     options={currencyOptions}
//     className={className}
//     onChange={onChangeHandler}
//     readonly={readonly}
//     value={value}
// />
