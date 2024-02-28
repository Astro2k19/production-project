import React, { type FC } from 'react'

import { classNames } from '@/shared/lib'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames([className])}>
            <VStack gap={'16'}>
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
        </div>
    )
}
