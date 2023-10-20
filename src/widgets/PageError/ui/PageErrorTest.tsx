import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'

import cls from './PageError.module.scss'

export const PageErrorTest: FC = () => {
	const { t } = useTranslation()

	return (
		<div className={classNames([cls.pageError])}>
			<div>
				<h1>
					{t('Oops! Something went wrong. Please, try again!', {
						ns: 'translation',
					})}
				</h1>
				<button>{t('Try again', { ns: 'translation' })}</button>
			</div>
		</div>
	)
}
