import { classNames } from '@/shared/lib'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { useFetchArticleById } from '../../api/articleApi'
import cls from '../ArticleDetails/ArticleDetails.module.scss'
import { renderArticleBlock } from '../ArticleDetails/renderArticleBlock'
import { ArticleDetailsSkeletonRedesigned } from '../ArticleDetailsSkeletonRedesigned/ArticleDetailsSkeletonRedesigned'

interface ArticleDetailsProps {
    className?: string
    id: string
}

export const ArticleDetailsRedesigned = ({
    id,
    className,
}: ArticleDetailsProps) => {
    const { data: article, isLoading } = useFetchArticleById(id)

    const FallbackLoading = (
        <Skeleton
            width={200}
            height={200}
            borderRadius={'50%'}
        />
    )

    if (isLoading) {
        return <ArticleDetailsSkeletonRedesigned />
    }

    return (
        <VStack
            gap={'8'}
            tag={'div'}
            className={classNames([className, cls.articleDetailsRedesigned])}
            data-testid={'ArticleDetails'}
        >
            <Text
                title={article?.title}
                TitleTag={'h1'}
                size={'L'}
                bold
            />
            <Text
                title={article?.subtitle}
                TitleTag={'h2'}
                size={'M'}
            />
            <AppImage
                src={article?.img}
                alt={article?.title}
                width={'100%'}
                height={420}
                fallback={FallbackLoading}
                errorFallback={FallbackLoading}
                className={cls.image}
            />
            <VStack gap={'16'}>
                {article?.blocks.map(renderArticleBlock)}
            </VStack>
        </VStack>
    )
}
