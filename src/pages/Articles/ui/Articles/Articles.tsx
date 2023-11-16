import React, { type FC, memo, useCallback } from 'react'

import { Page } from '@/widgets/Page'

import { StickyLayout } from '@/shared/layouts/StickyLayout'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { fetchNextArticlesPart } from '../../model/services/fetchNextArticlesPart/fetchNextArticlesPart'
import { ArticlesFilters } from '../ArticlesFilters/ArticlesFilters'
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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <StickyLayout
                    left={<div>sdfsdf</div>}
                    content={
                        <Page
                            className={cls.articlesPage}
                            dataTestId={'ArticlesPage'}
                            onScrollEnd={loadNextArticles}
                        >
                            <VStack gap={'16'}>
                                <ArticlesFilters />
                                <ArticlesInfiniteList />
                            </VStack>
                        </Page>
                    }
                    right={<div>sdfsdf</div>}
                />
            }
            off={
                <Page
                    className={cls.articlesPage}
                    dataTestId={'ArticlesPage'}
                    onScrollEnd={loadNextArticles}
                >
                    <VStack gap={'16'}>
                        <ArticlesFilters />
                        <ArticlesInfiniteList />
                    </VStack>
                </Page>
            }
        />
    )
}

export default memo(ArticlesPage)
