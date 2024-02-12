import EyeIcon from '@/shared/assets/icons/ant-design_eye-outlined.svg'
import DateIcon from '@/shared/assets/icons/clarity_date-line.svg'
import { classNames } from '@/shared/lib'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import { useFetchArticleById } from '../../api/articleApi'
import cls from '../ArticleDetails/ArticleDetails.module.scss'
import { renderArticleBlock } from '../ArticleDetails/renderArticleBlock'
import { ArticleDetailsSkeletonDeprecated } from '../ArticleDetailsSkeletonDeprecated/ArticleDetailsSkeletonDeprecated'

interface ArticleDetailsProps {
    className?: string
    id: string
}

export const ArticleDetailsDeprecated = ({
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
        return <ArticleDetailsSkeletonDeprecated />
    }

    return (
        <VStack
            gap={'12'}
            tag={'div'}
            className={classNames([className, cls.articleDetails])}
            data-testid={'ArticleDetails'}
        >
            <HStack justify={'center'}>
                <AppImage
                    src={article?.img}
                    alt={article?.title}
                    width={200}
                    height={200}
                    fallback={FallbackLoading}
                    errorFallback={FallbackLoading}
                    className={cls.image}
                />
            </HStack>
            <Text
                title={article?.title}
                TitleTag={'h1'}
                text={article?.subtitle}
                TextTag={'p'}
                size={TextSize.L}
            />
            <div>
                <HStack gap={'8'}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap={'8'}>
                    <Icon Svg={DateIcon} />
                    <Text text={String(article?.createdAt)} />
                </HStack>
            </div>
            <VStack gap={'32'}>
                {article?.blocks.map(renderArticleBlock)}
            </VStack>
        </VStack>
    )
}
