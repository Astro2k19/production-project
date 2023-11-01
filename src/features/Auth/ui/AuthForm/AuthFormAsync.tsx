import { type FC, lazy } from 'react'

import { type AuthFormProps } from './AuthForm'

export const AuthFormAsync = lazy<FC<AuthFormProps>>(
    async () =>
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(import('./AuthForm'))
            }, 1500)
        }),
)
