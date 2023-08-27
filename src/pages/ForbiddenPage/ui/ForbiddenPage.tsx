import { type FC } from 'react'
import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

interface AdminPanelProps {
  className?: string
}

const ForbiddenPage: FC<AdminPanelProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
      <Page>
          <h1>{t('FORBIDDEN_PAGE')}</h1>
      </Page>
  )
}

export default ForbiddenPage
