import { type FC, type SVGAttributes } from 'react'
import { appPaths } from 'shared/config/routerConfig/routerConfig'
import HomeIcon from 'shared/assets/icons/home_icon.svg'
import AboutIcon from 'shared/assets/icons/about_icon.svg'
import ProfileIcon from 'shared/assets/icons/profile_icon.svg'

export interface SidebarItemType {
  text: string
  path: string
  Icon: FC<SVGAttributes<SVGElement>>
  isProtected?: boolean
}

export const sidebarItems: SidebarItemType[] = [
  {
    path: appPaths.home,
    Icon: HomeIcon,
    text: 'Home'
  },
  {
    path: appPaths.about,
    Icon: AboutIcon,
    text: 'About'
  },
  {
    path: appPaths.profile,
    Icon: ProfileIcon,
    text: 'Profile',
    isProtected: true
  }
]
