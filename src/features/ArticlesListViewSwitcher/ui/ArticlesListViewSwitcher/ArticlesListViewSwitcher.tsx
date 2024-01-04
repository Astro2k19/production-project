import { type FC } from 'react'

import { ArticlesListView } from '@/entities/Article'

import ListView from '@/shared/assets/icons/Burger.svg'
import GridView from '@/shared/assets/icons/Tile.svg'
import GridViewDeprecated from '@/shared/assets/icons/grid_icon.svg'
import ListViewDeprecated from '@/shared/assets/icons/list_icon.svg'
import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features'
import { toggleFeature } from '@/shared/lib/features/lib/toggleFeatures'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './ArticlesListViewSwitcher.module.scss'

interface ArticlesListViewSwitcherProps {
    className?: string
    view?: ArticlesListView
    onChangeView: (view: ArticlesListView) => void
}

const viewList = [
    {
        icon: toggleFeature({
            name: 'isAppRedesigned',
            on: () => ListView,
            off: () => ListViewDeprecated,
        }),
        view: ArticlesListView.LIST,
    },
    {
        icon: toggleFeature({
            name: 'isAppRedesigned',
            on: () => GridView,
            off: () => GridViewDeprecated,
        }),
        view: ArticlesListView.GRID,
    },
]

export const ArticlesListViewSwitcher: FC<ArticlesListViewSwitcherProps> = ({
    className,
    onChangeView,
    view,
}) => {
    const onClick = (newView: ArticlesListView) => () => {
        onChangeView(newView)
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    className={classNames([
                        cls.articleViewSwitcherRedesigned,
                        className,
                    ])}
                    border={'round'}
                    variant={'light'}
                >
                    <HStack gap={'8'}>
                        {viewList.map((item, index) => (
                            <Icon
                                key={index}
                                Svg={item.icon}
                                clickable
                                onClick={onClick(item.view)}
                                className={classNames([], {
                                    [cls.noSelected]: item.view !== view,
                                })}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames([cls.articleViewSwitcher, className])}
                >
                    {viewList.map((item, index) => (
                        <ButtonDeprecated
                            key={index}
                            onClick={onClick(item.view)}
                        >
                            <IconDeprecated
                                Svg={item.icon}
                                className={classNames([], {
                                    [cls.selected]: item.view === view,
                                })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    )
}
