import { type CSSProperties, memo, useMemo } from 'react'

import FallbackAvatar from '@/shared/assets/icons/fallback_avatar.svg'
import { classNames } from '@/shared/lib'

import { AppImage } from '../AppImage'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    size?: number
    src?: string
    alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, size = 100, src, alt } = props

    const style = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    )

    const FallbackError = (
        <Icon
            Svg={FallbackAvatar}
            width={size}
            height={size}
        />
    )

    const FallbackLoading = (
        <Skeleton
            width={size}
            height={size}
            borderRadius={'50%'}
        />
    )

    return (
        <div
            className={classNames([cls.wrapper, className])}
            style={style}
        >
            <AppImage
                src={src}
                className={classNames([cls.avatar])}
                alt={alt}
                fallback={FallbackLoading}
                errorFallback={FallbackError}
            />
        </div>
    )
})
