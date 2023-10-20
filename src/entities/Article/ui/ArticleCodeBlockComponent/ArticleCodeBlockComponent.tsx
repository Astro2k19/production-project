import { memo } from 'react'

import { classNames } from '@/shared/lib'
import { Code } from '@/shared/ui/Code'

import { type ArticleCodeBlock } from '../../model/types/article'
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
	className?: string
	block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
	({ className, block }: ArticleCodeBlockComponentProps) => {
		return (
			<div
				className={classNames([
					cls.articleCodeBlockComponent,
					className,
				])}
			>
				<Code text={block.code} />
			</div>
		)
	},
)
