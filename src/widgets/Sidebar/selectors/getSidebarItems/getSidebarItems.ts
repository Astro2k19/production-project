import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthDate } from '@/entities/User'
import { type SidebarItemType } from '../../model/types/sidebar'
import HomeIcon from '@/shared/assets/icons/home_icon.svg'
import ProfileIcon from '@/shared/assets/icons/profile_icon.svg'
import AboutIcon from '@/shared/assets/icons/about_icon.svg'
import ArticlesIcon from '@/shared/assets/icons/articles_icon.svg'
import { appPaths } from '@/shared/types/router'

export const getSidebarItems = createSelector(
  getUserAuthDate,
  (authDate) => {
    const sidebarItems: SidebarItemType[] = [
      {
        path: appPaths.home,
        Icon: HomeIcon,
        text: 'Home'
      },
      {
        path: appPaths.about,
        Icon: AboutIcon,
        text: 'About'
      }
    ]

    if (authDate) {
      sidebarItems.push(
        {
          path: `${appPaths.profile}${authDate.id}`,
          Icon: ProfileIcon,
          text: 'Profile',
          isProtected: true
        },
        {
          path: appPaths.articles,
          Icon: ArticlesIcon,
          text: 'Articles',
          isProtected: true
        }
      )
    }

    return sidebarItems
  }
)
