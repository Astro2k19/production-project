import { ScrollToTopButton } from '@/features/ScrollToTopButton'

import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './scrollToolbar.module.scss'

export const ScrollToolbar = () => {
    return (
        <HStack
            justify={'center'}
            alignItems={'center'}
            className={cls.toolbar}
        >
            <ScrollToTopButton />
        </HStack>
    )
}
