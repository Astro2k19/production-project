import cls from './PageError.module.scss'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

export const PageErrorTest: FC = () => {
  const { t } = useTranslation()

  return (
      <div className={classNames([cls.pageError])}>
          <div>
              <h1>{t('Oops! Something went wrong. Please, try again!', { ns: 'translation' })}</h1>
              <button>{t('Try again', { ns: 'translation' })}</button>
          </div>
      </div>
  )
}
