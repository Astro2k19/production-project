import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { appPaths } from 'shared/config/routerConfig/routerConfig'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { isUserAdmin, isUserManager, type User, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface AvatarDropdownProps {
  className?: string
  authDate: User
}

export const AvatarDropdown = memo(({ authDate }: AvatarDropdownProps) => {
  const { t } = useTranslation()
  const isAdmin = useAppSelector(isUserAdmin)
  const isManager = useAppSelector(isUserManager)
  const isAdminPanelAccessible = isManager ?? isAdmin
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
            content: t('Admin Panel', { ns: 'profile' }),
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
