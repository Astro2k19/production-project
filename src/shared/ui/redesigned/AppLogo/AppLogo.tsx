import { memo } from 'react'

import LogoImg from '@/shared/assets/icons/logo.svg'
import { classNames } from '@/shared/lib'

import { HStack } from '../../redesigned/Stack'
import cls from './AppLogo.module.scss'

interface AvatarProps {
    className?: string
    size?: number
}

export const AppLogo = memo(({ className, size = 50 }: AvatarProps) => {
    return (
        <HStack
            justify={'center'}
            className={classNames([cls.appLogoWrapper, className])}
        >
            <div className={cls.smallGradient} />
            <div className={cls.bigGradient} />
            <LogoImg
                width={size}
                height={size}
            />
        </HStack>
    )
})
