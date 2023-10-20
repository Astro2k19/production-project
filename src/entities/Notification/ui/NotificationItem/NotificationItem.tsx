import { memo } from 'react'

import { classNames } from '@/shared/lib'
import { Card } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'

import { type Notification } from '../../model/types/NotificationType'

interface NotificationItemProps {
	className?: string
	item: Notification
}

export const NotificationItem = memo(
	({ className, item }: NotificationItemProps) => {
		const text =
			item.title.length > 15
				? `${item.title.slice(1, 30)}...`
				: item.title
		const content =
			item.description.length > 50
				? `${item.description.slice(1, 80)}...`
				: item.description

		if (item.href) {
			return (
				<a href={item.href}>
					<Card className={classNames([className])}>
						<Text
							title={text}
							text={content}
							TitleTag={'h5'}
						/>
					</Card>
				</a>
			)
		}

		return (
			<Card className={classNames([className])}>
				<Text
					title={text}
					text={content}
					TitleTag={'h5'}
				/>
			</Card>
		)
	},
)
