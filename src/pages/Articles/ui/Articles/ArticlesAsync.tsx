import { lazy } from 'react';

export const ArticlesAsync = lazy(
	async () =>
		await new Promise(resolve => {
			setTimeout(() => {
				// @ts-expect-error: TS2345
				resolve(import('./Articles'));
			}, 1500);
		})
);
