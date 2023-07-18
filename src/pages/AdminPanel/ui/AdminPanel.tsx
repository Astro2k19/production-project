import { type FC } from 'react'
import cls from './AdminPanel.module.scss'
import { classNames } from 'shared/lib'
import { Page } from 'widgets/Page/Page'

interface AdminPanelProps {
  className?: string
}

const AdminPanel: FC<AdminPanelProps> = ({ className }) => {
  return (
      <Page className={classNames([cls.adminPanel, className])}>
          <h1>Admin panel</h1>
      </Page>
  )
}

export default AdminPanel
