import { type ReactNode } from 'react'

import { classNames } from '@/shared/lib'

import cls from './StickyLayout.module.scss'

interface StickyLayoutProps {
    className?: string
    left: ReactNode
    content: ReactNode
    right: ReactNode
}

export const StickyLayout = (props: StickyLayoutProps) => {
    const { className, left, right, content } = props

    return (
        <div className={classNames([className, cls.stickyLayout])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    )
}
