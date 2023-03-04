import { type FC, lazy } from 'react'
import { type AuthFormProps } from './AuthForm'

export const AuthFormAsync = lazy<FC<AuthFormProps>>(async () => await new Promise((resolve) => {
  setTimeout(() => { // @ts-expect-error: TS2345
    resolve(import('./AuthForm'))
  }, 1500)
}))
