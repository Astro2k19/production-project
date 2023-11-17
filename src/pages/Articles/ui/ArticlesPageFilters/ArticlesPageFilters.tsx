import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticlesFiltersSelectors } from '@/features/ArticlesFiltersSelectors'
import { ArticlesListViewSwitcher } from '@/features/ArticlesListViewSwitcher'
import { ArticleTabTypes } from '@/features/ArticlesTabTypes'

import { classNames } from '@/shared/lib'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters'

interface ArticlesFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo(
    ({ className }: ArticlesFiltersProps) => {
        const { t } = useTranslation()
        const {
            articleType,
            onChangeType,
            onChangeOrder,
            order,
            onChangeSearch,
            onChangeSort,
            sort,
            search,
            onChangeListView,
            view,
        } = useArticlesFilters()

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
