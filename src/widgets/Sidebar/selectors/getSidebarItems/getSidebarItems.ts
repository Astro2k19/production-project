import { createSelector } from '@reduxjs/toolkit'

import { type SidebarItemType } from '../../model/types/sidebar'

import { getUserAuthDate } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about_icon.svg'
import ArticlesIcon from '@/shared/assets/icons/articles_icon.svg'
import HomeIcon from '@/shared/assets/icons/home_icon.svg'
import ProfileIcon from '@/shared/assets/icons/profile_icon.svg'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'

export const getSidebarItems = createSelector(
  getUserAuthDate,
  (authDate) => {
    const sidebarItems: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: HomeIcon,
        text: 'Home'
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'About'
      }
    ]

    if (authDate) {
      sidebarItems.push(
        {
          path: getRouteProfile(authDate.id),
          Icon: ProfileIcon,
          text: 'Profile',
          isProtected: true
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: 'Articles',
          isProtected: true
        }
      )
    }

    return sidebarItems
  }
)
