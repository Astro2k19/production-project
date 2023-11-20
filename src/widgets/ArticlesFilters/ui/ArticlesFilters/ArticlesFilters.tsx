import { memo } from 'react'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line authoring-project-plugin/import-layer-checker
import { ArticlesSortFields } from '@/pages/Articles'

import { ArticlesFiltersSelectors } from '@/features/ArticlesFiltersSelectors'
import { ArticleTabTypes } from '@/features/ArticlesTabTypes'

import { ArticleType } from '@/entities/Article'

import SearchIcon from '@/shared/assets/icons/Search.svg'
import { classNames } from '@/shared/lib'
import { SortOrder } from '@/shared/types/sortOrder'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'

interface ArticlesFiltersProps {
    className?: string
    onChangeSort: (newSort: ArticlesSortFields) => void
    onChangeOrder: (newOrder: SortOrder) => void
    sort?: ArticlesSortFields
    order?: SortOrder
    onChangeSearch: (search: string) => void
    onChangeType: (newType: ArticleType) => void
    articleType?: ArticleType
    search?: string
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        search,
        className,
        onChangeSearch,
        onChangeType,
        articleType,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props
    const { t } = useTranslation()

    return (
        <Card
            padding={'24'}
            border={'round'}
        >
            <VStack
                gap={'32'}
                alignItems={'start'}
                className={classNames([className])}
            >
                <Input
                    placeholder={t('Search')}
                    value={search}
                    onChange={onChangeSearch}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />
                <ArticleTabTypes
                    onChangeType={onChangeType}
                    articleType={articleType}
                />
                <ArticlesFiltersSelectors
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
            </VStack>
        </Card>
    )
})
