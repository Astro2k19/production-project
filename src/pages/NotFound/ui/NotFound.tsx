import { classNames } from 'shared/lib'
import cls from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

interface NotFoundProps {
  className?: string
}

export const NotFound: FC = ({ className }: NotFoundProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames([cls.notFound, className])}>
          <h1>{t('Not found page', { ns: 'translation' })}</h1>
      </div>
  )
}
