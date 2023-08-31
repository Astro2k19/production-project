import { useMemo } from 'react'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { getUserRoles, type UserRoles } from '@/entities/User'
import { Navigate } from 'react-router-dom'

import { appPaths } from '@/shared/types/router'

interface ProtectedWithRoleProps {
  children: JSX.Element
  requiredRoles?: UserRoles[]
}

export const RoleGuard = ({ children, requiredRoles }: ProtectedWithRoleProps) => {
  const userRoles = useAppSelector(getUserRoles)
  const hasRequiredPage = useMemo(() => {
    if (!requiredRoles) {
      return true
    }

    return requiredRoles.some(role => userRoles?.includes(role))
  }, [requiredRoles, userRoles])

  if (hasRequiredPage) {
    return children
  }

  return <Navigate to={appPaths.forbidden_page} replace />
}
