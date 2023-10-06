import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

interface AdminPanelProps {
  className?: string
}

const ForbiddenPage: FC<AdminPanelProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
      <Page dataTestId={'ForbiddenPage'}>
          <h1>{t('FORBIDDEN_PAGE')}</h1>
      </Page>
  )
}

export default ForbiddenPage
