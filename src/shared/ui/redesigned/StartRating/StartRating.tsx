import { FC, useState } from 'react'

import Star from '@/shared/assets/icons/Star.svg'
import { classNames } from '@/shared/lib'

import { Icon } from '../../redesigned/Icon'
import { HStack } from '../Stack'
import cls from './StartRating.module.scss'

interface StartRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    selectedStarsCount?: number
    size?: number
}

const rating = [1, 2, 3, 4, 5]

export const StartRating: FC<StartRatingProps> = ({
    className,
    selectedStarsCount = 0,
    onSelect,
    size = 24,
}) => {
    const [currentStarsCount, setCurrentStarsCount] =
        useState(selectedStarsCount)
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
        <HStack
            gap={'4'}
            className={classNames([cls.starRatingRedesigned, className])}
            data-testid={'StarRating'}
        >
            {rating.map((starCount, index) => {
                const commonProps = {
                    Svg: Star,
                    key: starCount,
                    className: classNames([cls.star], {
                        [cls.hovered]: starCount <= currentStarsCount,
                        [cls.selected]: isSelected,
                    }),
                    onMouseEnter: onMouseEnter(starCount),
                    onMouseLeave,
                    onClick: onClick(starCount),
                    width: size,
                    height: size,
                    'data-testid': `StarRating.${starCount}`,
                    'data-selected': starCount <= currentStarsCount,
                }

                return (
                    <Icon
                        clickable={!isSelected}
                        {...commonProps}
                    />
                )
            })}
        </HStack>
    )
}
