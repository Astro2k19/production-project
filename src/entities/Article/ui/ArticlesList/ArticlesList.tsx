import { type FC, type HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'
import { Text } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'

import { ArticlesListView } from '../../model/const/articleConst'
import { type Article } from '../../model/types/article'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton'
import cls from './ArticlesList.module.scss'

interface ArticlesListProps {
    className?: string
    articles?: Article[]
    view?: ArticlesListView
    isLoading?: boolean
    target?: HTMLAttributeAnchorTarget
}

export const ArticlesList: FC<ArticlesListProps> = props => {
    const {
        className,
        articles,
        view = ArticlesListView.GRID,
        isLoading,
        target,
    } = props
    const { t } = useTranslation()

    const renderArticleItem = (article: Article) => {
        const mods = {
            [cls.gridListItem]: view === 'GRID',
        }

        return (
            <ArticlesListItem
                article={article}
                view={view}
                target={target}
                className={classNames([cls.card], mods)}
                key={article.id}
            />
        )
    }

    const getElementSkeleton = (view: ArticlesListView) => {
        const length = 4

        return new Array(length).fill(0).map((item, index) => {
            const mods = {
                [cls.gridListItem]: view === 'GRID',
            }

            return (
                <ArticlesListItemSkeleton
                    view={view}
                    key={index}
                    className={classNames([cls.card, cls.skeleton], mods)}
                />
            )
        })
    }

    if (!isLoading && articles?.length === 0) {
        return <Text title={t("Such articles doesn't exist")} />
    }

    const mods = {
        [cls.gridList]: view === 'GRID',
    }

    console.log(cls[view])

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <HStack
                    className={classNames([className, cls[view]])}
                    wrap
                    alignItems={'start'}
                    justify={view === 'GRID' ? 'center' : 'start'}
                    gap={'24'}
                    max
                >
                    {/* {articles?.length ? articles.map(renderArticleItem) : null} */}
                    {getElementSkeleton(view)}
                </HStack>
            }
            off={
                <div
                    className={classNames(
                        [className, cls[view], cls.articlesList],
                        mods,
                    )}
                >
                    {articles?.length ? articles.map(renderArticleItem) : null}
                    {isLoading && getElementSkeleton(view)}
                </div>
            }
        />
    )
}
