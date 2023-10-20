import {
	type MutableRefObject,
	type ReactNode,
	type UIEvent,
	useRef,
} from 'react'
import { useLocation } from 'react-router-dom'

import {
	getSavePageScrollByKey,
	savePageScrollActions,
} from '@/features/SavePageScroll'

import { classNames } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { useFetchData } from '@/shared/lib/hooks/useFetchData/useFetchData'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { TestsProps } from '@/shared/types/tests'

import cls from './Page.module.scss'

interface PageProps extends TestsProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
}

export const Page = ({
	className,
	children,
	onScrollEnd,
	dataTestId = 'Page',
}: PageProps) => {
	const rootRef = useRef() as MutableRefObject<HTMLElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()
	const scrollTop = useAppSelector(state =>
		getSavePageScrollByKey(state, pathname),
	)

	useInfiniteScroll({
		rootTarget: rootRef,
		triggerTarget: triggerRef,
		callback: onScrollEnd,
	})

	const onScroll = useDebounce((event: UIEvent<HTMLElement>) => {
		const target = event.target as HTMLElement
		dispatch(
			savePageScrollActions.setScrollPosition({
				page: pathname,
				scroll: target.scrollTop,
			}),
		)
	}, 500)

	useFetchData(() => {
		rootRef.current.scrollTop = scrollTop
	})

	return (
		<section
			ref={rootRef}
			className={classNames([cls.page, className])}
			onScroll={onScroll}
			data-testid={dataTestId}
		>
			{children}
			<div ref={triggerRef} />
		</section>
	)
}
