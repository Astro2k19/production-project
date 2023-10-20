import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

import { classNames } from '@/shared/lib'

import cls from './NotFound.module.scss'

interface NotFoundPageProps {
	className?: string
}

export const NotFoundPage: FC = ({ className }: NotFoundPageProps) => {
	const { t } = useTranslation()

	return (
		<Page
			className={classNames([cls.notFound, className])}
			dataTestId={'NotFoundPage'}
		>
			<h1>{t('Not found page', { ns: 'translation' })}</h1>
		</Page>
	)
}
