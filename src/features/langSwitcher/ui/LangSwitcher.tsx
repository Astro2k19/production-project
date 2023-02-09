import cls from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariants } from 'shared/ui'
import { type FC } from 'react'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation('translation')

  const toggleLanguage = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === 'eng' ? 'ua' : 'eng')
  }

  return (
      <Button className={classNames([cls.switcher, className])} onClick={toggleLanguage} variant={ButtonVariants.CLEAR}>
          {t('Language')}
      </Button>
  )
}
