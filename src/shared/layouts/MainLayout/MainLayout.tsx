import { type ReactNode } from 'react'

import { classNames } from '@/shared/lib'

import cls from './MainLayout.module.scss'

interface MainLayoutProps {
    className?: string
    navbar: ReactNode
    sidebar: ReactNode
    content: ReactNode
    toolbar: ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className, sidebar, navbar, content, toolbar } = props

    return (
        <div className={classNames([className, cls.mainLayout])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.navbar}>{navbar}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    )
}
