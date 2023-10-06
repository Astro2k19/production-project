import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'
import { Page } from '@/widgets/Page'

import cls from './AdminPanel.module.scss'

interface AdminPanelProps {
  className?: string
}

const AdminPanel: FC<AdminPanelProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
      <Page className={classNames([cls.adminPanel, className])} dataTestId={'AdminPage'}>
          <h1>{t('Admin panel')}</h1>
      </Page>
  )
}

export default AdminPanel
