import { classNames } from 'shared/lib'
import cls from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundProps {
  className?: string
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames([cls.notFound, className])}>
          <h1>{t('Not found page', { ns: 'translation' })}! :(</h1>
          <h1>{t('text for about', { ns: 'about' })}! :(</h1>
      </div>
  )
}
