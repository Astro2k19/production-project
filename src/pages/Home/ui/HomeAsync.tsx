import { lazy } from 'react'

export const HomeAsync = lazy(async () => await import('./Home'))
