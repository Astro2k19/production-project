import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line
import { ArticlesSortFields } from '@/pages/Articles/model/const/articleFiltersConst'

import { classNames } from '@/shared/lib'
import { type SortOrder } from '@/shared/types/sortOrder'
import { ListBox, ListBoxItem } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticlesFiltersSelectorsProps {
    className?: string
    onChangeSort: (newSort: ArticlesSortFields) => void
    onChangeOrder: (newOrder: SortOrder) => void
    sort?: ArticlesSortFields
    order?: SortOrder
}

export const ArticlesFiltersSelectors = memo(
    (props: ArticlesFiltersSelectorsProps) => {
        const { t } = useTranslation('article')

        const { className, onChangeOrder, onChangeSort, order, sort } = props

        const filterSortOptions = useMemo<
            Array<ListBoxItem<ArticlesSortFields>>
        >(
            () => [
                {
                    label: t('articles_sort_fields.Title'),
                    value: 'title',
                },
                {
                    label: t('articles_sort_fields.Date'),
                    value: 'createdAt',
                },
                {
                    label: t('articles_sort_fields.Views'),
                    value: 'views',
                },
            ],
            [t],
        )

        const filterOrderOptions = useMemo<Array<ListBoxItem<SortOrder>>>(
            () => [
                {
                    label: t('articles_sort_order.Ascending'),
                    value: 'asc',
                },
                {
                    label: t('articles_sort_order.Descending'),
                    value: 'desc',
                },
            ],
            [t],
        )

        return (
            <VStack
                gap={'8'}
                className={classNames([className])}
            >
                <Text text={t('Sort by')} />
                <ListBox
                    items={filterSortOptions}
                    value={sort}
                    defaultValue={filterSortOptions[0].value}
                    onChange={onChangeSort}
                />
                <ListBox
                    items={filterOrderOptions}
                    defaultValue={filterOrderOptions[0].value}
                    value={order}
                    onChange={onChangeOrder}
                />
            </VStack>
        )
    },
)
