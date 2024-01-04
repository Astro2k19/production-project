import { lazy } from 'react'

export const SettingsAsync = lazy(async () => await import('./Settings'))
