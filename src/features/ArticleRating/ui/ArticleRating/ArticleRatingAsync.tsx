import React, { Suspense } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

import { ArticleRatingProps } from './ArticleRating'

export const ArticleRatingLazy = React.lazy(
    async () => await import('./ArticleRating'),
)

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense
            fallback={
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Skeleton
                            width={'100%'}
                            height={126}
                        />
                    }
                    off={
                        <SkeletonDeprecated
                            width={'100%'}
                            height={126}
                        />
                    }
                />
            }
        >
            <ArticleRatingLazy {...props} />
        </Suspense>
    )
}
