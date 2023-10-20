import React, {
	type FC,
	type HTMLAttributeAnchorTarget,
	type MutableRefObject,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import {
	type Components,
	Virtuoso,
	VirtuosoGrid,
	type VirtuosoGridHandle,
	type VirtuosoHandle,
} from 'react-virtuoso'

import { INITIAL_TOP_ARTICLES_INDEX_KEY } from '@/shared/const/localStorage'
import { classNames } from '@/shared/lib'
import { Button, ButtonVariants } from '@/shared/ui/Button'
import { Loader } from '@/shared/ui/Loader'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import {
	type ArticleType,
	ArticlesListView,
} from '../../model/const/articleConst'
import { type Article } from '../../model/types/article'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton'
import cls from './ArticlesList.module.scss'

interface ArticlesListProps {
	className?: string
	articles: Article[]
	articlesType: ArticleType
	view?: ArticlesListView
	isLoading?: boolean
	hasMore?: boolean
	target?: HTMLAttributeAnchorTarget
	onReachEnd?: () => void
	Header?: Components['Header']
}

export const ArticlesListVirtualized: FC<ArticlesListProps> = props => {
	const {
		className,
		articles,
		view = ArticlesListView.GRID,
		isLoading,
		hasMore,
		articlesType,
		target,
		onReachEnd,
		Header,
	} = props
	const { t } = useTranslation()
	const virtuoso = useRef<VirtuosoHandle>(null)
	const virtuosoGrid = useRef<VirtuosoGridHandle>(null)
	const [hasInitialized, setHasInitialized] = useState(false)

	const isLargeResolution = window.innerHeight > 1050
	const shouldShowLoadingButton =
		!hasInitialized &&
		!isLoading &&
		hasMore &&
		isLargeResolution &&
		view !== ArticlesListView.LIST
	const loadMoreCallback =
		hasInitialized || !isLargeResolution || view === ArticlesListView.LIST
			? onReachEnd
			: undefined

	useEffect(() => {
		if (hasInitialized) {
			setHasInitialized(false)
		}
		/* eslint-disable */
	}, [articlesType, isLargeResolution])

	useEffect(() => {
		const index =
			sessionStorage.getItem(INITIAL_TOP_ARTICLES_INDEX_KEY) ?? 1
		let timeout: NodeJS.Timeout

		if (view === 'LIST' && virtuoso.current) {
			timeout = setTimeout(() => {
				scrollToElement(virtuoso, +index)
			}, 300)
		} else if (view === 'GRID' && virtuosoGrid.current) {
			timeout = setTimeout(() => {
				scrollToElement(virtuosoGrid, +index)
			}, 300)
		}

		return () => {
			clearTimeout(timeout)
		}
	}, [view])

	const scrollToElement = (
		virtuoso: MutableRefObject<VirtuosoHandle | VirtuosoGridHandle | null>,
		index: number,
	) => {
		virtuoso.current?.scrollToIndex({
			index,
			align: 'center',
			behavior: 'smooth',
		})
	}

	const renderArticleItem = (index: number, article: Article) => (
		<ArticlesListItem
			article={article}
			view={view}
			target={target}
			className={cls.card}
			key={article.id}
			index={index}
		/>
	)

	const getElementSkeleton = (view: ArticlesListView): JSX.Element[] => {
		const length = 3

		return new Array(length).fill(0).map((item, index) => (
			<ArticlesListItemSkeleton
				view={view}
				key={index}
				className={classNames([cls.card, cls.skeleton])}
			/>
		))
	}

	const onClickButton = () => {
		if (onReachEnd) {
			onReachEnd()
			setHasInitialized(true)
		}
	}

	const Footer = () => {
		if (shouldShowLoadingButton) {
			return (
				<HStack
					justify={'center'}
					className={cls.loadMoreWrapper}
				>
					<Button
						variant={ButtonVariants.OUTLINE}
						onClick={onClickButton}
					>
						{t('Load more')}
					</Button>
				</HStack>
			)
		}

		if (isLoading) {
			return view === ArticlesListView.LIST ? (
				<div>{getElementSkeleton(view)}</div>
			) : (
				<Loader />
			)
		}

		return null
	}

	if (!isLoading && articles.length === 0) {
		return (
			<>
				{Header && <Header />}
				<Text title={t("Such articles don't exist")} />
			</>
		)
	}

	return (
		<div
			className={classNames([cls.articlesList, className, cls[view]])}
			data-testid={'ArticlesList'}
		>
			{view === ArticlesListView.LIST ? (
				<Virtuoso
					style={{ height: '100%', overflowX: 'hidden' }}
					data={articles}
					itemContent={renderArticleItem}
					endReached={loadMoreCallback}
					components={{
						...(Header ? { Header } : {}),
						Footer,
					}}
					ref={virtuoso}
				/>
			) : (
				<VirtuosoGrid
					data={articles}
					itemContent={renderArticleItem}
					className={cls.virtuosoGrid}
					endReached={loadMoreCallback}
					components={{
						...(Header ? { Header } : {}),
						Footer,
					}}
					itemClassName={cls.gridListItem}
					listClassName={cls.gridList}
					ref={virtuosoGrid}
				/>
			)}
		</div>
	)
}
