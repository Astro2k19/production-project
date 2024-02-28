import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleType } from '@/entities/Article'

import { classNames } from '@/shared/lib'
import { type TabItem } from '@/shared/ui/redesigned/Tabs'
import { Tabs } from '@/shared/ui/redesigned/Tabs'

interface ArticleTabTypesProps {
    className?: string
    onChangeType: (newType: ArticleType) => void
    articleType?: ArticleType
}

export const ArticleTabTypes = memo(
    ({ className, onChangeType, articleType }: ArticleTabTypesProps) => {
        const { t } = useTranslation('article')
        const articleTypesOptions = useMemo<Array<TabItem<ArticleType>>>(() => {
            return Object.values(ArticleType).reduce(
                (tabItems: Array<TabItem<ArticleType>>, item) => [
                    ...tabItems,
                    {
                        value: item,
                        label: t(`articles_sort_categories.${item}`),
                    } /* i18next-extract-disable-line */,
                ],
                [],
            )
        }, [t])

        return (
            <Tabs<ArticleType>
                onClick={onChangeType}
                tabs={articleTypesOptions}
                value={articleType}
                direction={'column'}
                className={classNames([className])}
            />
        )
    },
)
