import { useMemo } from 'react'
import { matchPath, useLocation } from 'react-router-dom'

import { AppRouteByPathPattern } from '@/shared/const/router'

export const useRouteChange = () => {
    const location = useLocation()

    return (
        useMemo(() => {
            return Object.entries(AppRouteByPathPattern).find(([pattern]) =>
                matchPath(pattern, location.pathname),
            )
        }, [location.pathname]) ?? []
    )
}
