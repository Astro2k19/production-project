import { buildSelector } from '@/shared/lib/store/buildSelector'

import { JsonSettings } from '../types/jsonSettings'

const jsonSettings: JsonSettings = {}

export const [useUserJsonSettings, getUserJsonSettings] = buildSelector(
    state => state.user.authData?.jsonSettings ?? jsonSettings,
)
export const [useUserJsonSettingsByKey, getUserJsonSettingsByKey] =
    buildSelector(
        (state, key: keyof JsonSettings) =>
            state.user.authData?.jsonSettings?.[key],
    )
