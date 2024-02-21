import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthDate } from '@/entities/User'

import ArticlesIcon from '@/shared/assets/icons/Articles.svg'
import ProfileIcon from '@/shared/assets/icons/Avatar.svg'
import HomeIcon from '@/shared/assets/icons/Home.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router'

import { type SidebarItemType } from '../../model/types/sidebar'

export const getSidebarItems = createSelector(getUserAuthDate, authDate => {
    const sidebarItems: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: HomeIcon,
            text: 'Home',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'About',
        },
    ]

    if (authDate) {
        sidebarItems.push(
            {
                path: getRouteProfile(authDate.id),
                Icon: ProfileIcon,
                text: 'Profile',
                isProtected: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticlesIcon,
                text: 'Articles',
                isProtected: true,
            },
        )
    }

    return sidebarItems
})
