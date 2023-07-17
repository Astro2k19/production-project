import { type FC } from 'react'
import cls from './AdminPanel.module.scss'
import { classNames } from 'shared/lib'

interface AdminPanelProps {
  className?: string
}

export const ForbiddenPage: FC<AdminPanelProps> = ({ className }) => {
  return (
      <div className={classNames([cls.adminPanel, className])}>
          This page is forbidden for you!
      </div>
  )
}
