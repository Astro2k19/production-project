import { type FC } from 'react'

import { classNames } from '@/shared/lib'
import { Card } from '@/shared/ui/deprecated/Card'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

import { ArticlesListView } from '../../../model/const/articleConst'
import cls from '../ArticlesListItem.module.scss'
import { ArticlesListItemSkeletonProps } from '../ArticlesListItemSkeleton'

export const ArticlesListItemSkeletonDeprecated: FC<
    ArticlesListItemSkeletonProps
> = ({ view, className }) => {
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
        <div
            className={classNames([cls.articlesListItem, cls[view], className])}
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
                <div className={classNames([cls.imageWrapper, cls.skeleton])}>
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
    )
}
