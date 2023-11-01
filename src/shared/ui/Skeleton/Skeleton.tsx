import { type CSSProperties, type FC } from 'react'

import { classNames } from '@/shared/lib'

import cls from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    width: string | number
    height: string | number
    borderRadius?: string
}

export const Skeleton: FC<SkeletonProps> = props => {
    const { className, width, height, borderRadius } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    }

    return (
        <div
            title={'Loading...'}
            style={styles}
            className={classNames([className, cls.skeleton])}
        ></div>
    )
}
