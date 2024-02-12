import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

export const ArticleDetailsSkeletonRedesigned = () => {
    return (
        <VStack
            data-testid={'ArticleDetails.Loading'}
            gap={'16'}
            max
        >
            <Skeleton
                width={'100%'}
                height={38}
                borderRadius={'8px'}
            />
            <Skeleton
                width={'100%'}
                height={32}
                borderRadius={'8px'}
            />
            <Skeleton
                width={'100%'}
                height={420}
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
                <Skeleton
                    width={'100%'}
                    height={17}
                    borderRadius={'4px'}
                />
            </VStack>
        </VStack>
    )
}
