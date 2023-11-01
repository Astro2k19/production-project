import { type AsyncThunk } from '@reduxjs/toolkit'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { type ArticleType, type ArticlesListView } from '@/entities/Article'

import { classNames } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { type SortOrder } from '@/shared/types/sortOrder'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { HStack, VStack } from '@/shared/ui/Stack'

import { type ArticlesSortFields } from '../../model/const/articleFiltersConst'
import {
    useGetArticlesFiltersOrder,
    useGetArticlesFiltersSearch,
    useGetArticlesFiltersSort,
    useGetArticlesFiltersType,
} from '../../model/selectors/articlesFiltersSelectors'
import { useArticlesFiltersActions } from '../../model/slice/articlesFiltersSlice'
import { ArticlesFiltersSelectors } from '../ArticlesFiltersSelectors/ArticlesFiltersSelectors'
import { ArticlesListViewSwitcher } from '../ArticlesListViewSwitcher/ArticlesListViewSwitcher'
import { ArticleTabTypes } from '../ArticlesTabTypes/ArticleTabTypes'

interface ArticlesFiltersProps {
    className?: string
    view: ArticlesListView
    onChangeListView: (view: ArticlesListView) => void
    fetchArticlesList: AsyncThunk<any, any, any>
}

export const ArticlesFilters = memo(
    ({
        className,
        view,
        onChangeListView,
        fetchArticlesList,
    }: ArticlesFiltersProps) => {
        const dispatch = useAppDispatch()
        const { t } = useTranslation()
        const sort = useGetArticlesFiltersSort()
        const order = useGetArticlesFiltersOrder()
        const search = useGetArticlesFiltersSearch()
        const articleType = useGetArticlesFiltersType()
        const { setPage, setSort, setOrder, setSearch, setType } =
            useArticlesFiltersActions()

        const fetchPosts = useCallback(() => {
            setPage(1)
            dispatch(fetchArticlesList({ replace: true }))
        }, [dispatch, fetchArticlesList, setPage])

        const debouncedFetchData = useDebounce(fetchPosts, 500)

        const onChangeSort = useCallback(
            (newSort: ArticlesSortFields) => {
                setSort(newSort)
                fetchPosts()
            },
            [fetchPosts, setSort],
        )

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                setOrder(newOrder)
                fetchPosts()
            },
            [fetchPosts, setOrder],
        )

        const onChangeSearch = useCallback(
            (search: string) => {
                setSearch(search)
                debouncedFetchData()
            },
            [debouncedFetchData, setSearch],
        )

        const onChangeType = useCallback(
            (newType: ArticleType) => {
                setType(newType)
                fetchPosts()
            },
            [fetchPosts, setType],
        )

        return (
            <VStack
                gap={'16'}
                className={classNames([className])}
            >
                <HStack justify={'spaceBetween'}>
                    <ArticlesFiltersSelectors
                        sort={sort}
                        order={order}
                        onChangeSort={onChangeSort}
                        onChangeOrder={onChangeOrder}
                    />
                    <ArticlesListViewSwitcher
                        view={view}
                        onChangeView={onChangeListView}
                    />
                </HStack>
                <Card>
                    <Input
                        placeholder={t('Search')}
                        value={search}
                        onChange={onChangeSearch}
                    />
                </Card>
                <ArticleTabTypes
                    onChangeType={onChangeType}
                    articleType={articleType}
                />
            </VStack>
        )
    },
)
