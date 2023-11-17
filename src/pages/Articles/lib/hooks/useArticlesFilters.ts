import { useCallback } from 'react'

import { ArticleType, ArticlesListView } from '@/entities/Article'

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { SortOrder } from '@/shared/types/sortOrder'

import { ArticlesSortFields } from '../../model/const/articleFiltersConst'
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

export const useArticlesFilters = () => {
    const dispatch = useAppDispatch()
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
    const debouncedFetchData = useDebounce(fetchPosts, 500)

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

    const onChangeListView = useCallback(
        (view: ArticlesListView) => {
            dispatch(articlesPageActions.setArticlesView(view))
        },
        [dispatch],
    )

    return {
        sort,
        order,
        search,
        articleType,
        fetchPosts,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
        onChangeListView,
        view,
    }
}
