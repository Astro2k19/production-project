import { type FC, type SVGAttributes } from 'react'

export interface SidebarItemType {
    text: string
    path: string
    Icon: FC<SVGAttributes<SVGElement>>
    isProtected?: boolean
}
