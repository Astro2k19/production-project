import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { isUserAdmin, isUserManager, type User, userActions } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { appPaths } from '@/shared/types/router'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Dropdown'
interface AvatarDropdownProps {
  className?: string
  authDate: User
}

export const AvatarDropdown = memo(({ authDate }: AvatarDropdownProps) => {
  const { t } = useTranslation()
  const isAdmin = useAppSelector(isUserAdmin)
  const isManager = useAppSelector(isUserManager)
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isAdminPanelAccessible = isManager || isAdmin
  const dispatch = useAppDispatch()
  const onLogOut = useCallback(
    () => {
      dispatch(userActions.logOut())
    },
    [dispatch]
  )

  const dropdownOptions = [
    ...(isAdminPanelAccessible
      ? [
          {
            content: t('Admin Panel'),
            href: appPaths.admin
          }
        ]
      : []),
    {
      content: t('Profile', { ns: 'profile' }),
      href: `${appPaths.profile}${authDate.id}`
    },
    {
      content: t('Log Out'),
      onClick: onLogOut
    }
  ]

  return (
      <Dropdown
            trigger={<Avatar src={authDate.avatar} size={30} />}
            items={dropdownOptions}
        />
  )
})
