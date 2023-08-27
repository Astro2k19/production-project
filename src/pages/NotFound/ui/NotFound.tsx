import { classNames } from '@/shared/lib'
import cls from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'
import { type FC } from 'react'
import { Page } from '@/widgets/Page'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
      <Page className={classNames([cls.notFound, className])}>
          <h1>{t('Not found page', { ns: 'translation' })}</h1>
      </Page>
  )
}
