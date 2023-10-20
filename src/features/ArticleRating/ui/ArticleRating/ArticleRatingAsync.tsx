import React, { Suspense } from 'react'

import { Skeleton } from '@/shared/ui/Skeleton'

import { ArticleRatingProps } from './ArticleRating'

export const ArticleRatingLazy = React.lazy(
	async () => await import('./ArticleRating'),
)

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
	return (
		<Suspense
			fallback={
				<Skeleton
					width={'100%'}
					height={126}
				/>
			}
		>
			<ArticleRatingLazy {...props} />
		</Suspense>
	)
}
