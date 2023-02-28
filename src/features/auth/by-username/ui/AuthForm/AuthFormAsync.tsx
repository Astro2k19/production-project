import { lazy } from 'react'

export const AuthFormAsync = lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./AuthForm')) }, 1500)
}))
