import { FC, useState } from 'react'
import cls from './StartRating.module.scss'
import { classNames } from '@/shared/lib'
import { Icon } from '@/shared/ui/icon/Icon'
import Star from '@/shared/assets/icons/star.svg'

interface StartRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  selectedStarsCount?: number
  size?: number
}

const rating = [1, 2, 3, 4, 5]

export const StartRating: FC<StartRatingProps> =
  ({
    className,
    selectedStarsCount = 0,
    onSelect,
    size = 24
  }) => {
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStarsCount)
    const [isSelected, setIsSelected] = useState(selectedStarsCount > 0)

    const onMouseEnter = (starCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(starCount)
      }
    }

    const onMouseLeave = () => {
      if (!isSelected) {
        setCurrentStarsCount(0)
      }
    }

    const onClick = (starCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(starCount)
        setIsSelected(true)
        onSelect?.(starCount)
      }
    }

    return (
        <div className={classNames([cls.startRation, className])}>
            {rating.map(starCount => (
                <Icon
                  Svg={Star}
                  key={starCount}
                  className={classNames([cls.star], { [cls.hovered]: starCount <= currentStarsCount, [cls.selected]: isSelected })}
                  onMouseEnter={onMouseEnter(starCount)}
                  onMouseLeave={onMouseLeave}
                  onClick={onClick(starCount)}
                  width={size}
                  height={size}
                />
            ))}
        </div>
    )
  }
