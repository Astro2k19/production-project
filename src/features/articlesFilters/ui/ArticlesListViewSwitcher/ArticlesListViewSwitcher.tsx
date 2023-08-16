import { type FC } from 'react'
import cls from './ArticlesListViewSwitcher.module.scss'
import { classNames } from '@/shared/lib'
import { ArticlesListView } from '@/entities/Article'
import ListView from '@/shared/assets/icons/list_icon.svg'
import GridView from '@/shared/assets/icons/grid_icon.svg'
import { Button } from '@/shared/ui'
import { Icon } from '@/shared/ui/icon/Icon'

interface ArticlesListViewSwitcherProps {
  className?: string
  view?: ArticlesListView
  onChangeView: (view: ArticlesListView) => void
}

const viewList = [
  {
    icon: ListView,
    view: ArticlesListView.LIST
  },
  {
    icon: GridView,
    view: ArticlesListView.GRID
  }
]

export const ArticlesListViewSwitcher: FC<ArticlesListViewSwitcherProps> = ({ className, onChangeView, view }) => {
  const onClick = (newView: ArticlesListView) => () => {
    onChangeView(newView)
  }

  return (
      <div className={classNames([cls.articlesListViewSwitcher, className])}>
          {viewList.map((item, index) => (
              <Button key={index} onClick={onClick(item.view)}>
                  <Icon Svg={item.icon} className={classNames([], { [cls.selected]: item.view === view })} />
              </Button>
          ))}
      </div>
  )
}
