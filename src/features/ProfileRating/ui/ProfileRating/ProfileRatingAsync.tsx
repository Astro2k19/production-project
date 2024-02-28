import React, { Suspense } from 'react'

import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

import { ProfileRatingProps } from './ProfileRating'

export const ProfileRatingLazy = React.lazy(
    async () => await import('./ProfileRating'),
)

export const profileRatingAsync = (props: ProfileRatingProps) => {
    return (
        <Suspense
            fallback={
                <Skeleton
                    width={'100%'}
                    height={126}
                />
            }
        >
            <ProfileRatingLazy {...props} />
        </Suspense>
    )
}
