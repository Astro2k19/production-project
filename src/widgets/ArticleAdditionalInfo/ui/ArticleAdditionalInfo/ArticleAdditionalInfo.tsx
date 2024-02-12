import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleEditButton } from '@/features/ArticleEditButton'

import { Article } from '@/entities/Article'

import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleAdditionalInfoProps {
    article?: Article
    userId?: string
    isLoading?: boolean
}

export const ArticleAdditionalInfo = memo(
    ({ article, userId, isLoading }: ArticleAdditionalInfoProps) => {
        const { t } = useTranslation('article')

        if (isLoading) {
            return (
                <VStack
                    gap={'16'}
                    alignItems={'start'}
                >
                    <HStack
                        gap={'16'}
                        alignItems={'center'}
                    >
                        <Skeleton
                            width={45}
                            height={45}
                            borderRadius={'50%'}
                        />
                        <Skeleton
                            width={150}
                            height={20}
                            borderRadius={'8px'}
                        />
                    </HStack>
                    <Skeleton
                        width={120}
                        height={40}
                        borderRadius={'16px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={20}
                        borderRadius={'8px'}
                    />
                </VStack>
            )
        }

        if (!article) {
            return null
        }

        return (
            <VStack
                gap={'16'}
                alignItems={'start'}
            >
                <HStack
                    gap={'16'}
                    alignItems={'center'}
                >
                    <Avatar
                        src={article.user.avatar}
                        size={45}
                    />
                    <Text
                        text={article.user.username}
                        bold
                    />
                    <Text
                        text={article.createdAt}
                        bold
                    />
                </HStack>
                <ArticleEditButton
                    articleId={article.id}
                    userId={userId}
                />
                <Text text={t('views', { count: article.views })} />
            </VStack>
        )
    },
)
