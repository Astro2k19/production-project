import { lazy } from 'react'

export const ArticleSingleAsync = lazy(
    async () =>
        await new Promise(resolve => {
            setTimeout(() => {
                // @ts-expect-error: TS2345
                resolve(import('./ArticleSingle'))
            }, 1500)
        }),
)
