import { type FC } from 'react'

import { ArticlesListView } from '@/entities/Article'

import ListView from '@/shared/assets/icons/Burger.svg'
import GridView from '@/shared/assets/icons/Tile.svg'
import { classNames } from '@/shared/lib'
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
        icon: ListView,
        view: ArticlesListView.LIST,
    },
    {
        icon: GridView,
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
    )
}
