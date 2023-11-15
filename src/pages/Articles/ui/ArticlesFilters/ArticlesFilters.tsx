import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticlesFiltersSelectors } from '@/features/ArticlesFiltersSelectors'
import { ArticlesListViewSwitcher } from '@/features/ArticlesListViewSwitcher'
import { ArticleTabTypes } from '@/features/ArticlesTabTypes'

import { type ArticleType, type ArticlesListView } from '@/entities/Article'

import { classNames } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { type SortOrder } from '@/shared/types/sortOrder'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import { type ArticlesSortFields } from '../../model/const/articleFiltersConst'
import {
    getArticlesListView,
    useGetArticlesFiltersOrder,
    useGetArticlesFiltersSearch,
    useGetArticlesFiltersSort,
    useGetArticlesFiltersType,
} from '../../model/selectors/articlesPageList'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import {
    articlesPageActions,
    useArticlesPageActions,
} from '../../model/slice/articlesPageListSlice/articlesPageListSlice'

interface ArticlesFiltersProps {
    className?: string
}

export const ArticlesFilters = memo(({ className }: ArticlesFiltersProps) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const sort = useGetArticlesFiltersSort()
    const order = useGetArticlesFiltersOrder()
    const search = useGetArticlesFiltersSearch()
    const articleType = useGetArticlesFiltersType()
    const view = useAppSelector(getArticlesListView)

    const { setPage, setSort, setOrder, setSearch, setType } =
        useArticlesPageActions()

    const fetchPosts = useCallback(() => {
        setPage(1)
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch, setPage])

    const debouncedFetchData = useDebounce(fetchPosts, 500)

    const onChangeListView = useCallback(
        (view: ArticlesListView) => {
            dispatch(articlesPageActions.setArticlesView(view))
        },
        [dispatch],
    )

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
})
