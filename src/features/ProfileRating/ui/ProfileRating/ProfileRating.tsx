import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { RatingCard } from '@/entities/Rating'
import { getUserAuthDate } from '@/entities/User'

import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Skeleton } from '@/shared/ui/Skeleton'

import {
    useGetProfileRating,
    usePostProfileRating,
} from '../../api/profileRatingApi'

export interface ProfileRatingProps {
    className?: string
    profileId: string
    withPortal?: boolean
}

const ProfileRating = memo(
    ({ className, profileId, withPortal = true }: ProfileRatingProps) => {
        const { t } = useTranslation()
        const userData = useAppSelector(getUserAuthDate)
        const { data, isLoading } = useGetProfileRating({
            profileId,
            userId: userData?.id ?? '',
        })
        const [postProfileRating] = usePostProfileRating()

        console.log(profileId, 'profileId')

        const profileRating = data?.at(0)

        const handleProfileRating = useCallback(
            (rate: number, feedback?: string) => {
                try {
                    postProfileRating({
                        profileId,
                        userId: userData?.id ?? '',
                        rate,
                        feedback,
                    })
                } catch (e) {
                    console.log(e)
                }
            },
            [postProfileRating, profileId, userData?.id],
        )

        const onAccept = useCallback(
            (rate: number, feedback: string) => {
                handleProfileRating(rate, feedback)
            },
            [handleProfileRating],
        )

        const onCancel = useCallback(
            (rate: number) => {
                handleProfileRating(rate)
            },
            [handleProfileRating],
        )

        // if (userData?.id === profileId) {
        //   return null
        // }

        if (isLoading) {
            return (
                <Skeleton
                    width={'100%'}
                    height={126}
                />
            )
        }

        return (
            <RatingCard
                title={t('How do you like the profile?', { ns: 'profile' })}
                feedbackTitle={t('Leave feedback about this profile!', {
                    ns: 'profile',
                })}
                onAccept={onAccept}
                onCancel={onCancel}
                rate={profileRating?.rate}
                withPortal={withPortal}
            />
        )
    },
)

export default ProfileRating
