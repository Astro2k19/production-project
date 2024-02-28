import { type FC } from 'react'
import { type FallbackProps } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/redesigned/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './PageError.module.scss'

export const PageError: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    const { t } = useTranslation('home')

    const errorContent = (
        <HStack
            alignItems={'center'}
            justify={'center'}
            className={cls.pageError}
        >
            <div>
                <Text
                    TitleTag={'h1'}
                    title={t('Something went wrong!', {
                        ns: 'translation',
                    })}
                    variant={'error'}
                />
                <Button
                    onClick={resetErrorBoundary}
                    variant={'filled'}
                >
                    {t('Try again', { ns: 'translation' })}
                </Button>
            </div>
        </HStack>
    )

    if (error) {
        return errorContent
    }

    return null
}
