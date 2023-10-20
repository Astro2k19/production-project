import { lazy } from 'react'

export const AdminPanelAsync = lazy(
	async () =>
		await new Promise(resolve => {
			setTimeout(() => {
				// @ts-expect-error: TS2345
				resolve(import('./AdminPanel'))
			}, 1500)
		}),
)
