import { ReactElement } from 'react'

import { ScrollToolbar } from '@/widgets/ScrollToolbar'

import { AppRoutes } from '@/shared/const/router'
import { useRouteChange } from '@/shared/lib/router/useRouteChange'

export const useAppToolbar = () => {
    const [, currentPathname = ''] = useRouteChange()

    const pathToToolbar: Partial<Record<AppRoutes | string, ReactElement>> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_SINGLE]: <ScrollToolbar />,
        [AppRoutes.MAIN]: <div>TEST</div>,
    }

    return pathToToolbar[currentPathname]
}
