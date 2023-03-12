import { type FC } from 'react'
import { Select } from 'shared/ui/select/Select'
import { Country } from '../../model/types/country'

const countryOptions = [
  {
    value: Country.UKRAINE,
    label: Country.UKRAINE
  },
  {
    value: Country.USA,
    label: Country.USA
  },
  {
    value: Country.POLAND,
    label: Country.POLAND
  },
  {
    value: Country.GERMANY,
    label: Country.GERMANY
  }
]

interface CurrencySelectProps {
  className?: string
  onChange: (value: Country) => void
  value?: Country
  readonly?: boolean
}

export const CountrySelect: FC<CurrencySelectProps> = (props) => {
  const { className, onChange, readonly, value } = props
  const onChangeHandler = (value: string) => {
    onChange(value as Country)
  }

  return (
      <Select
            label={'Country'}
            options={countryOptions}
            className={className}
            onChange={onChangeHandler}
            readonly={readonly}
            value={value}
        />
  )
}
