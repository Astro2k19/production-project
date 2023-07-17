import { type FC } from 'react'
import cls from './AdminPanel.module.scss'
import { classNames } from 'shared/lib'

interface AdminPanelProps {
  className?: string
}

export const AdminPanel: FC<AdminPanelProps> = ({ className }) => {
  return (
      <div className={classNames([cls.adminPanel, className])}>
          Admin panel
      </div>
  )
}
