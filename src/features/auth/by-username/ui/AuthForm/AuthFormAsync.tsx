import { lazy } from 'react'

export const AuthFormAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => { // @ts-expect-error: TS2345:
    resolve(import('./AuthForm'))
  }, 1500)
}))
