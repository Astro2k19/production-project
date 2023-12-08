import { type FC } from 'react'

import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'

import { ProfileCardProps } from '../../model/types/profile'
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
