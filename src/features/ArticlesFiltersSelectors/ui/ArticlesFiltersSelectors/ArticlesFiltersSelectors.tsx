import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticlesSortFields } from '@/pages/Articles/model/const/articleFiltersConst'

// eslint-disable-next-line authoring-project-plugin/import-layer-checker
import { classNames } from '@/shared/lib'
import { type SortOrder } from '@/shared/types/sortOrder'
import { Select, type SelectOption } from '@/shared/ui/deprecated/Select'

import cls from './ArticlesFiltersSelectors.module.scss'

interface ArticlesFiltersSelectorsProps {
    className?: string
    onChangeSort: (newSort: ArticlesSortFields) => void
    onChangeOrder: (newOrder: SortOrder) => void
    sort: ArticlesSortFields
    order?: SortOrder
}

export const ArticlesFiltersSelectors = memo(
    (props: ArticlesFiltersSelectorsProps) => {
        const { t } = useTranslation()

        const { className, onChangeOrder, onChangeSort, order, sort } = props

        const filterSortOptions = useMemo<
            Array<SelectOption<ArticlesSortFields>>
        >(
            () => [
                {
                    label: 'Title',
                    value: 'title',
                },
                {
                    label: 'Date',
                    value: 'createdAt',
                },
                {
                    label: 'Views',
                    value: 'views',
                },
            ],
            [],
        )

        const filterOrderOptions = useMemo<Array<SelectOption<SortOrder>>>(
            () => [
                {
                    label: 'ascending',
                    value: 'asc',
                },
                {
                    label: 'descending',
                    value: 'desc',
                },
            ],
            [],
        )

        return (
            <div
                className={classNames([
                    cls.articlesFiltersSelectors,
                    className,
                ])}
            >
                <Select
                    options={filterSortOptions}
                    label={t('Sort by')}
                    value={sort}
                    onChange={onChangeSort}
                />
                <Select
                    options={filterOrderOptions}
                    label={t('Sort order')}
                    value={order}
                    onChange={onChangeOrder}
                />
            </div>
        )
    },
)
