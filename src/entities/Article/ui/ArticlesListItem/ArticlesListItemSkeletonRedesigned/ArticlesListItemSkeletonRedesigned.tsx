import { type FC } from 'react'

import { classNames } from '@/shared/lib'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import { ArticlesListView } from '../../../model/const/articleConst'
import cls from '../ArticleListItemRedesigned/ArticleListItemRedesigned.module.scss'
import { ArticlesListItemSkeletonProps } from '../ArticlesListItemSkeleton'

export const ArticlesListItemSkeletonRedesigned: FC<
    ArticlesListItemSkeletonProps
> = ({ view, className }) => {
    if (view === ArticlesListView.GRID) {
        return (
            <Card
                border={'round'}
                className={classNames([className, cls[view]])}
                padding={'0'}
            >
                <Skeleton
                    width={'100%'}
                    height={250}
                    borderRadius={'32px 32px 0 0'}
                />
                <VStack
                    className={cls.content}
                    gap={'8'}
                >
                    <Skeleton
                        width={'100%'}
                        height={26}
                        borderRadius={'16px'}
                    />
                    <HStack justify={'spaceBetween'}>
                        <Skeleton
                            width={84}
                            height={22}
                            borderRadius={'16px'}
                        />
                        <Skeleton
                            width={88}
                            height={22}
                            borderRadius={'16px'}
                        />
                    </HStack>
                    <HStack
                        gap={'4'}
                        alignItems={'center'}
                        className={cls.cardBottom}
                    >
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius={'50%'}
                        />
                        <Skeleton
                            width={100}
                            height={20}
                            borderRadius={'16px'}
                        />
                    </HStack>
                </VStack>
            </Card>
        )
    }

    return (
        <Card
            className={classNames([className, cls[view]])}
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
                            borderRadius={'round'}
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
                    height={390}
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
    )
}
