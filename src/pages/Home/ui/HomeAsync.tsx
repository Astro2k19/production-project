import { lazy } from 'react'

export const HomeAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => { // @ts-expect-error: TS2345
    resolve(import('./Home'))
  }, 1500)
}))
