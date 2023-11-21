import { type FC } from 'react'

import { type Country } from '@/entities/Country'
import { type Currency } from '@/entities/Currency'

import { type ApiError } from '@/shared/api/api'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'

import { type Profile } from '../../model/types/profile'
import {
    ProfileCardDeprecated,
    ProfileCardDeprecatedError,
    ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated'
import {
    ProfileCardRedesigned,
    ProfileCardRedesignedError,
    ProfileCardRedesignedSkeletons,
} from '../ProfileCardRedesigned/ProfileCardRedesigned'

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

export const ProfileCard: FC<ProfileCardProps> = props => {
    const { isLoading, error } = props

    if (isLoading) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<ProfileCardRedesignedSkeletons />}
                off={<ProfileCardDeprecatedLoader />}
            />
        )
    }

    if (error) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<ProfileCardRedesignedError error={error} />}
                off={<ProfileCardDeprecatedError error={error} />}
            />
        )
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    )
}
