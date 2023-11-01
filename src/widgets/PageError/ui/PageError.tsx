import { type FC } from 'react'
import { type FallbackProps } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'

import cls from './PageError.module.scss'

export const PageError: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    const { t } = useTranslation('home')

    console.log(error)

    return (
        <div className={classNames([cls.pageError])}>
            <div>
                <h1>{t('Something went wrong!', { ns: 'translation' })}</h1>
                <button onClick={resetErrorBoundary}>
                    {t('Try again', { ns: 'translation' })}
                </button>
            </div>
        </div>
    )
}
