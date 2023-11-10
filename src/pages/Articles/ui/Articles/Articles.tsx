import React, { type FC, memo, useCallback } from 'react'

import { Page } from '@/widgets/Page'

import { ArticlePageGreeting } from '@/features/ArticlePageGreeting'

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { fetchNextArticlesPart } from '../../model/services/fetchNextArticlesPart/fetchNextArticlesPart'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'
import cls from './Articles.module.scss'

interface ArticlesProps {
    className?: string
}

const ArticlesPage: FC<ArticlesProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const loadNextArticles = useCallback(() => {
        console.log('end reached')
        dispatch(fetchNextArticlesPart())
    }, [dispatch])

    return (
        <Page
            className={cls.articlesPage}
            dataTestId={'ArticlesPage'}
            onScrollEnd={loadNextArticles}
        >
            {/* <ArticlesVirtualizedInfiniteList /> */}
            <ArticlesInfiniteList />
            <ArticlePageGreeting />
        </Page>
    )
}

export default memo(ArticlesPage)
