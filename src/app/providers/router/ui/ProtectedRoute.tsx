import { type FC, type ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { getUserAuthDate } from '@/entities/User'

import { getRouteMain } from '@/shared/const/router'

interface ProtectedRouteProps {
    children: ReactElement
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const user = useSelector(getUserAuthDate)
    const location = useLocation()

    if (!user) {
        return (
            <Navigate
                to={getRouteMain()}
                state={{ from: location }}
                replace
            />
        )
    }

    return children
}
