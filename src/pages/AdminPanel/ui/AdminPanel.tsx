import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

import { classNames } from '@/shared/lib'

interface AdminPanelProps {
    className?: string
}

const AdminPanel: FC<AdminPanelProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <Page
            className={classNames([className])}
            dataTestId={'AdminPage'}
        >
            <h1>{t('Admin panel')}</h1>
        </Page>
    )
}

export default AdminPanel
