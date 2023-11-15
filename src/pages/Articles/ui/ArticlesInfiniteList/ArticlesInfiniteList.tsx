import React, { memo } from 'react'

import { ArticlesList } from '@/entities/Article'

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
import { setInitialArticlesListState } from '../../model/services/setInitialArticlesListState/setInitialArticlesListState'
import {
    articlesListSelectors,
    articlesPageReducer,
} from '../../model/slice/articlesPageListSlice/articlesPageListSlice'

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

        useFetchData(() => {
            dispatch(setInitialArticlesListState())
        })

        return (
            <DynamicModuleLoader
                reducers={reducer}
                removeAfterUnmount={false}
            >
                <div>
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
