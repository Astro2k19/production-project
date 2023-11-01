import { StoreSchema } from '@/app/providers/storeProvider'

import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useGetAuthError, getAuthError] = buildSelector(
    (state: StoreSchema) => state?.loginForm?.error,
)
export const [useGetAuthLoading, getAuthLoading] = buildSelector(
    (state: StoreSchema) => state?.loginForm?.isLoading ?? false,
)
export const [useGetAuthPassword, getAuthPassword] = buildSelector(
    (state: StoreSchema) => state?.loginForm?.password ?? '',
)
export const [useGetAuthUsername, getAuthUsername] = buildSelector(
    (state: StoreSchema) => state?.loginForm?.username ?? '',
)
