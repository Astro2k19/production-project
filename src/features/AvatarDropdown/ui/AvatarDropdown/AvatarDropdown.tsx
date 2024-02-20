import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import {
    type User,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User'

import {
    getRouteAdminPanel,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Dropdown'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Dropdown } from '@/shared/ui/redesigned/Popups'

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

    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut())
    }, [dispatch])

    const dropdownOptions = [
        ...(isAdminPanelAccessible
            ? [
                  {
                      content: t('Admin Panel'),
                      href: getRouteAdminPanel(),
                  },
              ]
            : []),
        {
            content: t('Profile', { ns: 'profile' }),
            href: getRouteProfile(authDate.id),
        },
        {
            content: t('Settings'),
            href: getRouteSettings(),
        },
        {
            content: t('Log Out'),
            onClick: onLogOut,
        },
    ]

    return (
        <Dropdown
                            trigger={
                                <Avatar
                                    src={authDate.avatar}
                                    size={40}
                                />
                            }
                            items={dropdownOptions}
                        />
    )
})
