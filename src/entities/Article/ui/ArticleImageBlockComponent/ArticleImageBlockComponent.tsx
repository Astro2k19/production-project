import { memo } from 'react'

import { classNames } from '@/shared/lib'
import { Text, TextAligns } from '@/shared/ui/Text'

import { type ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
	className?: string
	block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
	({ className, block }: ArticleImageBlockComponentProps) => {
		return (
			<div
				className={classNames([
					cls.articleImageBlockComponent,
					className,
				])}
			>
				<img
					src={block.src}
					alt={block.title}
					className={cls.image}
				/>
				<Text
					text={block.title}
					align={TextAligns.CENTER}
				/>
			</div>
		)
	},
)
