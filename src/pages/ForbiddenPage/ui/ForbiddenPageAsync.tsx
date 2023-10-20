import { lazy } from 'react'

export const ForbiddenPageAsync = lazy(
	async () =>
		await new Promise(resolve => {
			setTimeout(() => {
				// @ts-expect-error: TS2345
				resolve(import('./ForbiddenPage'))
			}, 1500)
		}),
)
