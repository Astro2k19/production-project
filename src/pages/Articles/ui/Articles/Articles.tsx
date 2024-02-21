import React, { type FC, memo, useCallback } from 'react'

import { Page } from '@/widgets/Page'

import { StickyLayout } from '@/shared/layouts/StickyLayout'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { fetchNextArticlesPart } from '../../model/services/fetchNextArticlesPart/fetchNextArticlesPart'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'
import { FiltersContainer } from '../FiltersContainer/FiltersContainer'
import { ViewSwitcherContainer } from '../ViewSwitcherContainer/ViewSwitcherContainer'

interface ArticlesProps {
    className?: string
}

const ArticlesPage: FC<ArticlesProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const loadNextArticles = useCallback(() => {
        dispatch(fetchNextArticlesPart())
    }, [dispatch])

    return (
        <StickyLayout
            left={<ViewSwitcherContainer />}
            content={
                <Page
                    dataTestId={'ArticlesPage'}
                    onScrollEnd={loadNextArticles}
                >
                    <ArticlesInfiniteList />
                </Page>
            }
            right={<FiltersContainer />}
        />
    )
}

export default memo(ArticlesPage)
