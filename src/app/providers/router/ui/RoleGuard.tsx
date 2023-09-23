import { useMemo } from 'react'
import { Navigate } from 'react-router-dom'

import { getUserRoles, type UserRoles } from '@/entities/User'
import { getRouteForbidden } from '@/shared/const/router'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'

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

  return <Navigate to={getRouteForbidden()} replace />
}
