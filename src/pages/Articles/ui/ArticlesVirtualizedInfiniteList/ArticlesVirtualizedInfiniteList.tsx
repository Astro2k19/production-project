import React, { memo, useCallback } from 'react'

import {
    ArticlesFilters,
    getArticlesFiltersType,
} from '@/features/ArticlesFilters'

import {
    type ArticlesListView,
    ArticlesListVirtualized,
} from '@/entities/Article'

import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { useFetchData } from '@/shared/lib/hooks/useFetchData/useFetchData'

import {
    getArticlesListError,
    getArticlesListHasMore,
    getArticlesListIsLoading,
    getArticlesListView,
} from '../../model/selectors/articlesPageList'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { fetchNextArticlesPart } from '../../model/services/fetchNextArticlesPart/fetchNextArticlesPart'
import { setInitialArticlesListState } from '../../model/services/setInitialArticlesListState/setInitialArticlesListState'
import {
    articlesListSelectors,
    articlesPageActions,
    articlesPageReducer,
} from '../../model/slice/articlesPageListSlice/articlesPageListSlice'
import cls from './ArticlesVirtualizedInfiniteList.module.scss'

interface ArticleInfiniteListProps {
    className?: string
}

const reducer: ReducersList = {
    articlesPageList: articlesPageReducer,
}

export const ArticlesVirtualizedInfiniteList = memo(
    ({ className }: ArticleInfiniteListProps) => {
        const dispatch = useAppDispatch()
        const isLoading = useAppSelector(getArticlesListIsLoading)
        // eslint-disable-next-line
        const error = useAppSelector(getArticlesListError)
        const articles = useAppSelector(articlesListSelectors.selectAll)
        const view = useAppSelector(getArticlesListView)
        const hasMore = useAppSelector(getArticlesListHasMore)
        const articlesType = useAppSelector(getArticlesFiltersType)

        const loadNextArticles = useCallback(() => {
            console.log('end reached')
            dispatch(fetchNextArticlesPart())
        }, [dispatch])

        const onChangeListView = useCallback(
            (view: ArticlesListView) => {
                dispatch(articlesPageActions.setArticlesView(view))
            },
            [dispatch],
        )
        console.log('before useFetchData')

        useFetchData(() => {
            console.log('inside useFetchData')

            dispatch(setInitialArticlesListState())
        })

        const Header = useCallback(() => {
            return (
                <ArticlesFilters
                    view={view}
                    onChangeListView={onChangeListView}
                    className={cls.articlesFilter}
                    fetchArticlesList={fetchArticlesList}
                />
            )
        }, [view, onChangeListView])

        return (
            <DynamicModuleLoader
                reducers={reducer}
                removeAfterUnmount={false}
            >
                <ArticlesListVirtualized
                    articles={articles}
                    isLoading={true}
                    articlesType={articlesType}
                    hasMore={hasMore}
                    view={view}
                    onReachEnd={loadNextArticles}
                    Header={Header}
                />
            </DynamicModuleLoader>
        )
    },
)