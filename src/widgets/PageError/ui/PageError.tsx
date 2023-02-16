import cls from './PageError.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { type FC } from 'react'
import { type FallbackProps } from 'react-error-boundary'

export const PageError: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation()

  return (
      <div className={classNames([cls.pageError])}>
          <div>
              <h1>{t('Oops! Something went wrong.', { ns: 'translation' })}</h1>
              <button onClick={resetErrorBoundary}>{t('Try again', { ns: 'translation' })}</button>
          </div>
      </div>
  )
}
