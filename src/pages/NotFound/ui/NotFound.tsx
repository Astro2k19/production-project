import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'
import { Page } from '@/widgets/Page'

import cls from './NotFound.module.scss'

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
