import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

interface AdminPanelProps {
	className?: string
}

const ForbiddenPage: FC<AdminPanelProps> = () => {
	const { t } = useTranslation()
	return (
		<Page dataTestId={'ForbiddenPage'}>
			<div style={{ textAlign: 'center' }}>
				<h1>{t('FORBIDDEN_PAGE')}</h1>
			</div>
		</Page>
	)
}

export default ForbiddenPage
