import React, { Suspense } from 'react'
import { ProfileRatingProps } from './ProfileRating'
import { Skeleton } from '@/shared/ui/skeleton/Skeleton'

export const ProfileRatingLazy = React.lazy(async () => await import('./ProfileRating'))

export const profileRatingAsync = (props: ProfileRatingProps) => {
  return (
      <Suspense fallback={<Skeleton width={'100%'} height={126} />}>
          <ProfileRatingLazy {...props} />
      </Suspense>
  )
}
