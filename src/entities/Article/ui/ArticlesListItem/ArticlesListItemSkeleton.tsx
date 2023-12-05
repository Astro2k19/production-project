import { type FC } from 'react'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'
import { toggleFeature } from '@/shared/lib/features/toggleFeatures'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import { ArticlesListView } from '../../model/const/articleConst'
import cls from './ArticlesListItem.module.scss'

interface ArticlesListItemSkeletonProps {
    view: ArticlesListView
    className?: string
}

export const ArticlesListItemSkeleton: FC<ArticlesListItemSkeletonProps> = ({
    view,
    className,
}) => {
    const Skeleton = toggleFeature({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    })

    const Card = toggleFeature({
        name: 'isAppRedesigned',
        on: () => CardRedesigned,
        off: () => CardDeprecated,
    })

    if (view === ArticlesListView.GRID) {
        return (
            <div
                className={classNames([
                    cls.articlesListItem,
                    cls[view],
                    className,
                ])}
            >
                <Card className={cls.card}>
                    <div
                        className={classNames([cls.imageWrapper, cls.skeleton])}
                    >
                        <Skeleton
                            width={'100%'}
                            height={'100%'}
                        />
                    </div>
                    <div className={cls.content}>
                        <div className={cls.info}>
                            <Skeleton
                                width={'100%'}
                                height={24}
                            />
                        </div>
                        <Skeleton
                            width={150}
                            height={24}
                        />
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    className={classNames([
                        cls.articlesListItem,
                        className,
                        cls[view],
                    ])}
                    data-testid={'ArticlesListItem'}
                    padding={'24'}
                    border={'round'}
                >
                    <VStack gap={'16'}>
                        <VStack gap={'12'}>
                            <HStack
                                gap={'8'}
                                alignItems={'center'}
                            >
                                <Skeleton
                                    width={30}
                                    height={30}
                                    borderRadius={'50%'}
                                />
                                <Skeleton
                                    width={152}
                                    height={24}
                                    borderRadius={'32px'}
                                />
                            </HStack>
                            <Skeleton
                                width={'100%'}
                                height={38}
                                borderRadius={'8px'}
                            />
                        </VStack>
                        <Skeleton
                            width={'100%'}
                            height={38}
                            borderRadius={'8px'}
                        />
                        <Skeleton
                            width={'100%'}
                            height={27}
                            borderRadius={'8px'}
                        />
                        <Skeleton
                            width={'100%'}
                            height={407}
                            borderRadius={'16px'}
                        />
                        <VStack gap={'8'}>
                            <Skeleton
                                width={'90%'}
                                height={17}
                                borderRadius={'4px'}
                            />
                            <Skeleton
                                width={'85%'}
                                height={17}
                                borderRadius={'4px'}
                            />
                            <Skeleton
                                width={'95%'}
                                height={17}
                                borderRadius={'4px'}
                            />
                        </VStack>
                        <HStack justify={'end'}>
                            <Skeleton
                                width={56}
                                height={23}
                                borderRadius={'22px'}
                            />
                        </HStack>
                    </VStack>
                </Card>
            }
            off={
                <div
                    className={classNames([
                        cls.articlesListItem,
                        cls[view],
                        className,
                    ])}
                >
                    <Card>
                        <div className={cls.header}>
                            <div className={cls.user}>
                                <Skeleton
                                    width={30}
                                    height={30}
                                    borderRadius={'50%'}
                                />
                                <Skeleton
                                    width={100}
                                    height={20}
                                />
                            </div>
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                        />
                        <div
                            className={classNames([
                                cls.imageWrapper,
                                cls.skeleton,
                            ])}
                        >
                            <Skeleton
                                width={'100%'}
                                height={'100%'}
                            />
                        </div>
                        <Skeleton
                            width={'100%'}
                            height={140}
                            className={cls.description}
                        />
                        <div className={cls.footer}>
                            <Skeleton
                                width={70}
                                height={40}
                            />
                        </div>
                    </Card>
                </div>
            }
        />
    )
}
