import { type FC, type ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthDate } from '@/entities/User'
import { Navigate, useLocation } from 'react-router-dom'
import { appPaths } from '@/shared/config/routerConfig/routerConfig'

interface ProtectedRouteProps {
  children: ReactElement
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const user = useSelector(getUserAuthDate)
  const location = useLocation()

  if (!user) {
    return (
        <Navigate to={appPaths.home} state={{ from: location }} replace />
    )
  }

  return children
}
