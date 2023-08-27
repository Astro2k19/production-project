import { type FC } from 'react'
import cls from './AdminPanel.module.scss'
import { classNames } from '@/shared/lib'
import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

interface AdminPanelProps {
  className?: string
}

const AdminPanel: FC<AdminPanelProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
      <Page className={classNames([cls.adminPanel, className])}>
          <h1>{t('Admin panel')}</h1>
      </Page>
  )
}

export default AdminPanel
