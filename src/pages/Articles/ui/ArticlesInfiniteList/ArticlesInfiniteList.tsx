import React, { memo, useCallback } from 'react'

import { ArticlesFilters } from '@/features/ArticlesFilters'

import { ArticlesList, type ArticlesListView } from '@/entities/Article'

import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { useFetchData } from '@/shared/lib/hooks/useFetchData/useFetchData'

import {
    getArticlesListError,
    getArticlesListIsLoading,
    getArticlesListView,
} from '../../model/selectors/articlesPageList'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { setInitialArticlesListState } from '../../model/services/setInitialArticlesListState/setInitialArticlesListState'
import {
    articlesListSelectors,
    articlesPageActions,
    articlesPageReducer,
} from '../../model/slice/articlesPageListSlice/articlesPageListSlice'
import cls from '../ArticlesVirtualizedInfiniteList/ArticlesVirtualizedInfiniteList.module.scss'

interface ArticleInfiniteListProps {
    className?: string
}

const reducer: ReducersList = {
    articlesPageList: articlesPageReducer,
}

export const ArticlesInfiniteList = memo(
    ({ className }: ArticleInfiniteListProps) => {
        const dispatch = useAppDispatch()
        const isLoading = useAppSelector(getArticlesListIsLoading)
        // eslint-disable-next-line
        const error = useAppSelector(getArticlesListError)
        const articles = useAppSelector(articlesListSelectors.selectAll)
        const view = useAppSelector(getArticlesListView)

        const onChangeListView = useCallback(
            (view: ArticlesListView) => {
                dispatch(articlesPageActions.setArticlesView(view))
            },
            [dispatch],
        )

        useFetchData(() => {
            dispatch(setInitialArticlesListState())
        })

        return (
            <DynamicModuleLoader
                reducers={reducer}
                removeAfterUnmount={false}
            >
                <div>
                    <ArticlesFilters
                        view={view}
                        onChangeListView={onChangeListView}
                        className={cls.articlesFilter}
                        fetchArticlesList={fetchArticlesList}
                    />
                    <ArticlesList
                        articles={articles}
                        isLoading={isLoading}
                        view={view}
                    />
                </div>
            </DynamicModuleLoader>
        )
    },
)
