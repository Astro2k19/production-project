import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

export const ArticleDetailsSkeletonDeprecated = () => {
    return (
        <VStack
            gap={'12'}
            data-testid={'ArticleDetails.Loading'}
            max
        >
            <HStack justify={'center'}>
                <Skeleton
                    width={200}
                    height={200}
                    borderRadius={'50%'}
                />
            </HStack>
            <Skeleton
                width={'60%'}
                height={30}
            />
            <Skeleton
                width={'40%'}
                height={30}
            />
            <Skeleton
                width={'100%'}
                height={230}
            />
            <Skeleton
                width={'100%'}
                height={230}
            />
        </VStack>
    )
}
