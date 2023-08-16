import cls from './LangSwitcher.module.scss'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariants } from '@/shared/ui'
import { memo } from 'react'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
  }

  return (
      <Button className={classNames([cls.switcher, className])} onClick={toggleLanguage} variant={ButtonVariants.CLEAR}>
          {t('Language', { ns: 'translation' })}
      </Button>
  )
})
