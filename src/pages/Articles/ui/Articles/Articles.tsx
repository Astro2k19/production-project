import React, { type FC, memo } from 'react'

import { Page } from '@/widgets/Page'

import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'
import cls from './Articles.module.scss'

interface ArticlesProps {
	className?: string
}

const ArticlesPage: FC<ArticlesProps> = ({ className }) => {
	return (
		<Page
			className={cls.articlesPage}
			dataTestId={'ArticlesPage'}
		>
			<ArticlesInfiniteList />
		</Page>
	)
}

export default memo(ArticlesPage)
