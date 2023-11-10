import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthDate } from '@/entities/User'

import ArticlesIcon from '@/shared/assets/icons/Articles.svg'
import ProfileIcon from '@/shared/assets/icons/Avatar.svg'
import HomeIcon from '@/shared/assets/icons/Home.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import AboutIconDeprecated from '@/shared/assets/icons/about_icon.svg'
import ArticlesIconDeprecated from '@/shared/assets/icons/articles_icon.svg'
import HomeIconDeprecated from '@/shared/assets/icons/home_icon.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile_icon.svg'
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router'
import { toggleFeature } from '@/shared/lib/features/toggleFeatures'

import { type SidebarItemType } from '../../model/types/sidebar'

export const getSidebarItems = createSelector(getUserAuthDate, authDate => {
    const sidebarItems: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeature({
                name: 'isAppRedesigned',
                on: () => HomeIcon,
                off: () => HomeIconDeprecated,
            }),
            text: 'Home',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeature({
                name: 'isArticleRatingEnabled',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
            text: 'About',
        },
    ]

    if (authDate) {
        sidebarItems.push(
            {
                path: getRouteProfile(authDate.id),
                Icon: toggleFeature({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                text: 'Profile',
                isProtected: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeature({
                    name: 'isAppRedesigned',
                    on: () => ArticlesIcon,
                    off: () => ArticlesIconDeprecated,
                }),
                text: 'Articles',
                isProtected: true,
            },
        )
    }

    return sidebarItems
})
