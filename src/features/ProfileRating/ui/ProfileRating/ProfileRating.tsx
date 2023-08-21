import React, { memo, useCallback } from 'react'
import { RatingCard } from '@/entities/Rating'
import { useTranslation } from 'react-i18next'
import { useGetProfileRating, usePostProfileRating } from '../../api/profileRatingApi'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { getUserAuthDate } from '@/entities/User'
import { Skeleton } from '@/shared/ui/skeleton/Skeleton'

export interface ProfileRatingProps {
  className?: string
  profileId: string
}

const ProfileRating = memo(({ className, profileId }: ProfileRatingProps) => {
  const { t } = useTranslation()
  const userData = useAppSelector(getUserAuthDate)
  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? ''
  })
  const [postProfileRating] = usePostProfileRating()

  const profileRating = data?.at(0)

  const handleProfileRating = useCallback((rate: number, feedback?: string) => {
    try {
      postProfileRating({
        profileId,
        userId: userData?.id ?? '',
        rate,
        feedback
      })
    } catch (e) {
      console.log(e)
    }
  }, [postProfileRating, profileId, userData?.id])

  const onAccept = useCallback((rate: number, feedback: string) => {
    handleProfileRating(rate, feedback)
  }, [handleProfileRating])

  const onCancel = useCallback((rate: number) => {
    handleProfileRating(rate)
  }, [handleProfileRating])

  if (userData?.id === profileId) {
    return null
  }

  if (isLoading) {
    return (
        <Skeleton width={'100%'} height={126} />
    )
  }

  return (
      <RatingCard
         title={t('How do you like the profile?', { ns: 'profile' })}
         feedbackTitle={t('Leave feedback about this profile!', { ns: 'profile' })}
         onAccept={onAccept}
         onCancel={onCancel}
         rate={profileRating?.rate}
       />
  )
})

export default ProfileRating
