import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleType } from '@/entities/Article'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'
import {
    type TabItem,
    Tabs as TabsDeprecated,
} from '@/shared/ui/deprecated/Tabs'
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
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Tabs<ArticleType>
                        onClick={onChangeType}
                        tabs={articleTypesOptions}
                        value={articleType}
                        direction={'column'}
                        className={classNames([className])}
                    />
                }
                off={
                    <TabsDeprecated<ArticleType>
                        onClick={onChangeType}
                        tabs={articleTypesOptions}
                        value={articleType}
                        className={classNames([className])}
                    />
                }
            />
        )
    },
)
