import { lazy } from 'react'

export const ProfileAsync = lazy(
	async () =>
		await new Promise(resolve => {
			setTimeout(() => {
				// @ts-expect-error: TS2345
				resolve(import('./Profile'))
			}, 1500)
		}),
)
