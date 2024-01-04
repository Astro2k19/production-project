import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features'
import {
    Button as ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'

import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggleLanguage = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Button
                    className={classNames([cls.switcherRedesigned, className])}
                    onClick={toggleLanguage}
                    variant={'clear'}
                >
                    {t('Language', { ns: 'translation' })}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames([cls.switcher, className])}
                    onClick={toggleLanguage}
                    variant={ButtonVariants.CLEAR}
                >
                    {t('Language', { ns: 'translation' })}
                </ButtonDeprecated>
            }
        />
    )
})
