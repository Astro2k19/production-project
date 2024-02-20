import { type FC } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

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
            <ProfileCardRedesignedSkeletons />
        )
    }

    if (error) {
        return (
            <ProfileCardRedesignedError error={error} />
        )
    }

    return (
        <ProfileCardRedesigned {...props} />
    )
}
