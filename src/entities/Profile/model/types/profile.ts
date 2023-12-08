import { type Country } from '@/entities/Country'
import { type Currency } from '@/entities/Currency'

import { ApiError } from '@/shared/api/api'

export interface Profile {
    id: string | number
    first?: string
    lastname?: string
    age?: number | string
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileCardProps {
    isLoading?: boolean
    error?: ApiError
    data?: Profile
    className?: string
    readonly?: boolean
    onChangeFirstname: (value: string) => void
    onChangeLastname: (value: string) => void
    onChangeAge: (value: string) => void
    onChangeUsername: (value: string) => void
    onChangeAvatar: (value: string) => void
    onChangeCurrency: (currency: Currency) => void
    onChangeCountry: (country: Country) => void
}
