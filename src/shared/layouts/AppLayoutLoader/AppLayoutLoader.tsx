import React from 'react'

import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { MainLayout } from '../MainLayout'
import cls from './AppLayoutLoader.module.scss'

export const AppLayoutLoader = () => {
    return (
        <MainLayout
            navbar={
                <div className={cls.navbar}>
                    <Skeleton
                        width={'40px'}
                        height={'40px'}
                        borderRadius={'50%'}
                    />
                </div>
            }
            sidebar={
                <Skeleton
                    width={'220px'}
                    height={'100%'}
                    borderRadius={'round'}
                />
            }
            content={
                <VStack
                    gap={'16'}
                    className={cls.stack}
                >
                    <Skeleton
                        width={'80%'}
                        height={'40px'}
                        borderRadius={'round'}
                    />
                    <Skeleton
                        width={'50%'}
                        height={'40px'}
                        borderRadius={'round'}
                    />
                    <Skeleton
                        width={'70%'}
                        height={'40px'}
                        borderRadius={'round'}
                    />
                    <Skeleton
                        width={'40%'}
                        height={'40px'}
                        borderRadius={'round'}
                    />
                    <Skeleton
                        width={'65%'}
                        height={'40px'}
                        borderRadius={'round'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'20%'}
                        borderRadius={'round'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'20%'}
                        borderRadius={'round'}
                    />
                </VStack>
            }
        />
    )
}
