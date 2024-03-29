import { lazy } from 'react'

export const AboutAsync = lazy(
    async () =>
        await new Promise(resolve => {
            setTimeout(() => {
                // @ts-expect-error: TS2345
                resolve(import('./About'))
            }, 1500)
        }),
)
