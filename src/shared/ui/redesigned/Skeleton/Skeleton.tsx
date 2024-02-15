import { type CSSProperties, type FC } from 'react'

import { classNames } from '@/shared/lib'

import cls from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    width: string | number
    height: string | number
    borderRadius?: string | SkeletonBorders
}

type SkeletonBorders = 'normal' | 'round' | 'partial'

const mappedSkeletonBorders: Record<SkeletonBorders | string, string> = {
    normal: '0',
    round: '32px',
    partial: '16px',
}

export const Skeleton: FC<SkeletonProps> = props => {
    const { className, width, height, borderRadius = 'normal' } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: mappedSkeletonBorders[borderRadius] || borderRadius,
    }

    return (
        <div
            title={'Loading...'}
            style={styles}
            className={classNames([cls.skeleton, className])}
        ></div>
    )
}
