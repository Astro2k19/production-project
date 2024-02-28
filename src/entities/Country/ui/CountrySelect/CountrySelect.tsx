import { type FC } from 'react'

import { ListBox } from '@/shared/ui/redesigned/Popups'

import { Country } from '../../model/const/countryConts'

const countryOptions = [
    {
        value: Country.UKRAINE,
        label: Country.UKRAINE,
    },
    {
        value: Country.USA,
        label: Country.USA,
    },
    {
        value: Country.POLAND,
        label: Country.POLAND,
    },
    {
        value: Country.GERMANY,
        label: Country.GERMANY,
    },
]

interface CurrencySelectProps {
    className?: string
    onChange: (value: Country) => void
    value?: Country
    readonly?: boolean
}

export const CountrySelect: FC<CurrencySelectProps> = props => {
    const { className, onChange, readonly, value } = props
    const onChangeHandler = (value: string) => {
        onChange(value as Country)
    }

    return (
        <ListBox
            label={'Country'}
            items={countryOptions}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            className={className}
        />
    )
}
